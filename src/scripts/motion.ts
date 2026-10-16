// All page motion lives here. Elements start hidden via `.js` CSS in Layout.astro,
// so nothing flashes before GSAP takes over.
import { gsap } from 'gsap';

(window as Window & { __revealReady?: boolean }).__revealReady = true;

const hidden = '[data-hero], [data-reveal], .headline .w > span';

// Scroll reveals: each tween is built paused (its start state applies at once) and plays
// the first time its element enters the viewport. A plain IntersectionObserver keeps
// ScrollTrigger out of the bundle.
const io = new IntersectionObserver(
	(entries) => {
		for (const entry of entries) {
			if (!entry.isIntersecting) continue;
			pending.get(entry.target)?.forEach((t) => t.play());
			pending.delete(entry.target);
			io.unobserve(entry.target);
		}
	},
	{ rootMargin: '0px 0px -12% 0px' },
);
const pending = new Map<Element, gsap.core.Tween[]>();
const onEnter = (el: Element, tween: gsap.core.Tween) => {
	pending.set(el, [...(pending.get(el) ?? []), tween]);
	io.observe(el);
};

gsap.matchMedia().add(
	{ motion: '(prefers-reduced-motion: no-preference)', reduce: '(prefers-reduced-motion: reduce)' },
	(ctx) => {
		if (ctx.conditions?.reduce) {
			gsap.set(hidden, { autoAlpha: 1 });
			return;
		}

		// Intro: top line, then the headline word by word out of its masks, then the actions
		gsap
			.timeline({ defaults: { ease: 'power4.out' }, delay: 0.15 })
			.fromTo('[data-hero="line"]', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.8 })
			.fromTo(
				'.headline .w > span',
				{ autoAlpha: 1, yPercent: 110, rotation: 4 },
				{ yPercent: 0, rotation: 0, duration: 1.2, stagger: 0.035 },
				'-=0.5',
			)
			.fromTo('[data-hero="info"]', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.9 }, '-=0.8');

		// Section headings wipe upward into view
		gsap.utils.toArray<HTMLElement>('[data-reveal="heading"]').forEach((el) => {
			onEnter(
				el,
				gsap.fromTo(
					el,
					{ autoAlpha: 1, yPercent: 35, clipPath: 'inset(0% 0% 100% 0%)' },
					{ yPercent: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'expo.out', clearProps: 'clipPath', paused: true },
				),
			);
		});

		// Lists and grids: the container appears, its children follow one after another
		gsap.utils.toArray<HTMLElement>('[data-reveal="stagger"]').forEach((el) => {
			gsap.set(el, { autoAlpha: 1 });
			onEnter(
				el,
				gsap.fromTo(
					el.children,
					{ autoAlpha: 0, y: 32 },
					{ autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, paused: true },
				),
			);
		});

		// Everything else: a single fade and rise
		gsap.utils.toArray<HTMLElement>('[data-reveal=""]').forEach((el) => {
			onEnter(
				el,
				gsap.fromTo(el, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', paused: true }),
			);
		});
	},
);
