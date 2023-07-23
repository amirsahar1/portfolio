export const websiteJsonLd = {
	'@context': 'http://schema.org',
	'@type': 'WebSite',
	name: 'amir-sahar.com',
	alternateName: 'Amir Sahar',
	url: 'https://amir-sahar.com',
	description:
		'Front-End Software Engineer with a focus on React.js and TypeScript. I have more than 8 years experience working in software engineering.',
	image:
		'https://res.cloudinary.com/dooz3lqjb/image/upload/v1689591362/Screenshot_2023-07-17_at_13.55.34_qa0irx.png',
};

export const personJsonLd = {
	'@context': 'http://schema.org',
	'@type': 'Person',
	image:
		'https://amir-sahar.com/_next/image?url=%2Fassets%2Famir.jpg&w=1080&q=75',
	name: 'amir sahar',
	alternateName: 'AmirSahar',
	url: 'https://amir-sahar.com',
	jobTitle: [
		'Senior Software Engineer',
		'Senior Software Consultant',
		'Frontend Engineer',
		'Front-End Developer',
		'Web Developer',
	],
	hasOccupation: {
		'@type': 'Occupation',
		name: 'Senior Software Engineer',
		occupationLocation: { '@type': 'City', name: 'Tel Aviv' },
		description:
			'Develops web applications and websites using TypeScript, React and HTML5.',
		skills:
			'HTML5, CSS, JavaScript, React, Sass, Less, Node.js, Express.js, Next.js, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, E-Commerce',
		alternateName: [
			'Frontend Developer',
			'Full Stack Developer',
			'Frontend Engineer',
		],
		responsibilities: [
			'App Development',
			'Web Design',
			'Website Development',
			'JavaScript Development',
			'Frontend Development',
			'Full Stack Development',
			'Online Marketing',
			'Web Developer',
			'Website Maintenance',
		],
	},
	sameAs: [
		'www.linkedin.com/in/amir-sahar-89145011a',
		'https://github.com/amirsahar1',
	],
	brand: [
		{
			'@type': 'Brand',
			name: 'Software Engineer',
			alternateName: 'Front-End Engineer',
		},
		{ '@type': 'Brand', name: 'AmirSahar', alternateName: 'Amir Sahar' },
	],
	homeLocation: { '@type': 'City', name: 'Tel Aviv' },
	nationality: { '@type': 'Country', name: 'Israel' },
};
