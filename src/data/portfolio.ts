// All page content lives here, based on the CV.

export const profile = {
	name: 'primestrider',
	role: 'Software developer',
	city: 'Jakarta, Indonesia',
	intro:
		'I build web and mobile apps with a focus on performance and code that stays easy to maintain.',
	status: 'Taking freelance projects.',
	github: 'https://github.com/primestrider',
	linkedin: 'https://linkedin.com/in/rickyreplying',
};

export const about =
	'For over three years I’ve built web and mobile apps for companies, clients, and my own projects.';

export const experience = [
	{ role: 'Frontend Developer', place: 'PT Reka Multi Aptika, Jakarta', years: '2022–present' },
	{ role: 'Frontend Developer', place: 'Freelance', years: '2024–present' },
	{ role: 'Laboratory Assistant', place: 'Multimedia Nusantara University', years: '2020–2022' },
];

export const skillGroups = [
	{
		title: 'Frontend',
		skills: ['TypeScript', 'JavaScript', 'Vue.js', 'Nuxt', 'React', 'Astro', 'Tailwind CSS', 'PWA', 'TanStack Query', 'Axios', 'Zod'],
	},
	{ title: 'Mobile', skills: ['React Native', 'Expo', 'Ionic'] },
	{ title: 'Backend & data', skills: ['Node.js', 'Express', 'NestJS', 'MySQL'] },
	{ title: 'Tools', skills: ['Git', 'Docker', 'Postman', 'Jira'] },
];

const repo = (name: string) => `https://github.com/primestrider/${name}`;

export const projects: {
	title: string;
	kind: string;
	summary: string;
	stack?: string[];
	links?: { label: string; href: string }[];
}[] = [
	{
		title: 'BATPay',
		kind: 'Work, mobile app',
		summary: 'An e-wallet app for everyday digital payments.',
	},
	{
		title: 'BATPay Merchant',
		kind: 'Work, web app',
		summary: 'A web platform for merchants to run their business and track sales.',
	},
	{
		title: 'Galad Koin',
		kind: 'Work, web app',
		summary: 'A web app for following the crypto market and trading.',
	},
	{
		title: 'Remote For Hive',
		kind: 'Freelance, website',
		summary: 'A company profile site and an admin dashboard for online courses.',
	},
	{
		title: 'Bersimpul',
		kind: 'Freelance, website',
		summary: 'A website for creating and sharing digital wedding invitations.',
	},
	{
		title: 'Trade Plan',
		kind: 'Personal, mobile and web app',
		summary: 'A mobile app for writing down trade plans, with a web calculator for working out trades.',
		stack: ['React Native', 'Expo', 'React', 'TypeScript'],
		links: [
			{ label: 'Open calculator', href: 'https://trade-calculator-six.vercel.app' },
			{ label: 'Mobile repository', href: repo('trade-plan-mobile') },
			{ label: 'Web repository', href: repo('trade-calculator') },
		],
	},
	{
		title: 'Group Order',
		kind: 'Personal, web app',
		summary: 'A web app for collecting orders from a group in one place.',
		stack: ['Vue', 'TypeScript', 'Tailwind CSS'],
		links: [
			{ label: 'Open app', href: 'https://group-order-puce.vercel.app' },
			{ label: 'View repository', href: repo('group-order') },
		],
	},
	{
		title: 'Vue Admin Dashboard',
		kind: 'Open source, template',
		summary: 'An admin dashboard template for business apps.',
		stack: ['Vue', 'Nuxt UI', 'Tailwind CSS'],
		links: [{ label: 'View repository', href: repo('vue-dashboard-nuxt-ui') }],
	},
	{
		title: 'Expo Boilerplate',
		kind: 'Open source, template',
		summary: 'A ready-to-use starting point for new React Native apps.',
		stack: ['Expo', 'Expo Router', 'TanStack Query'],
		links: [{ label: 'View repository', href: repo('rn-expo-boilerplate') }],
	},
	{
		title: 'Vue Boilerplate',
		kind: 'Open source, template',
		summary: 'A Vue 3 starter kit with a feature-based folder structure, created with one CLI command.',
		stack: ['Vue', 'TypeScript', 'Pinia', 'TanStack Query'],
		links: [{ label: 'View repository', href: repo('vue-boilerplate') }],
	},
	{
		title: 'Nuxt Landing Page',
		kind: 'Open source, template',
		summary: 'A starter kit for landing pages with SEO, translations, and image handling already set up.',
		stack: ['Nuxt', 'Nuxt UI', 'Tailwind CSS'],
		links: [{ label: 'View repository', href: repo('nuxt-landing-starter-kit') }],
	},
	{
		title: 'Nuxt E-commerce',
		kind: 'Open source, template',
		summary: 'A starter kit for online stores with state management, translations, and SEO already set up.',
		stack: ['Nuxt', 'Nuxt UI', 'Pinia'],
		links: [{ label: 'View repository', href: repo('nuxt-ecommerce-starter-kit') }],
	},
	{
		title: 'Express Boilerplate',
		kind: 'Open source, template',
		summary: 'A REST API starter kit organised by feature, with auth, rate limiting, background jobs, and API docs set up.',
		stack: ['Express', 'TypeScript', 'Drizzle ORM', 'MySQL'],
		links: [{ label: 'View repository', href: repo('boilerplate-express') }],
	},
	{
		title: 'Nest Boilerplate',
		kind: 'Open source, template',
		summary: 'A starting point for NestJS backends, with auth, validation, logging, and API docs already set up.',
		stack: ['NestJS', 'TypeScript', 'Drizzle ORM', 'MySQL'],
		links: [{ label: 'View repository', href: repo('nest-boilerplate') }],
	},
	{
		title: 'Trip Planner API',
		kind: 'Personal, backend',
		summary: 'The backend for a trip planning app, built while learning NestJS.',
		stack: ['NestJS', 'TypeScript'],
		links: [{ label: 'View repository', href: repo('trip-planner-backend') }],
	},
];
