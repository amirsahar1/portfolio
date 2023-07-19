import { AnimatePage } from '@components/atoms/AnimatePage';
import { HeroSection } from '@components/molecules/HeroSection/HeroSection';

import { sanityClient } from '@lib/sanity';

import { servicesQuery } from '@queries/services';

import type { Service as ServiceType } from '@types';

const getData = async () => {
	const services: ServiceType[] = await sanityClient.fetch(servicesQuery);

	return { services };
};

export const metadata = {
	title: 'Software Engineer and Consultant Amir Sahar',
	description:
		'A Front-End Software Engineer with a focus on JavaScript and React. I have more than 10 years experience working in software engineering and consulting.',
	keywords: [
		'Software Engineer',
		'Amir Sahar',
		'Software Consulting',
		'Front-End',
		'Full-Stack',
		'React',
		'TypeScript',
		'JavaScript',
		'CSS',
		'Tailwind',
	],
};

const HomePage = async () => {
	const { services } = await getData();

	return (
		<AnimatePage>
			<HeroSection />
		</AnimatePage>
	);
};

export default HomePage;
