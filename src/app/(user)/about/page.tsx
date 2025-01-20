import { AnimatePage } from '@components/atoms/AnimatePage';
import { Button } from '@components/atoms/Button';
import { Container } from '@components/atoms/Container';
import { IconDownload } from '@components/atoms/Icons';
import { Education } from '@components/organisms/Education';

import { sanityClient } from '@lib/sanity';

import { educationQuery } from '@queries/education';
import { jobsQuery } from '@queries/jobs';
import { podcastsQuery } from '@queries/podcasts';

import LogoTs from '@root/public/assets/tools/Typescript.svg';
import LogoCypress from '@root/public/assets/tools/cypress.svg';
import LogoDocker from '@root/public/assets/tools/docker.svg';
import LogoNest from '@root/public/assets/tools/nest.svg';
import LogoNext from '@root/public/assets/tools/nextjs.svg';
import LogoNode from '@root/public/assets/tools/node.svg';
import LogoNx from '@root/public/assets/tools/nx.svg';
import LogoReact from '@root/public/assets/tools/react-framework.svg';
import LogoStorybook from '@root/public/assets/tools/storybook.svg';
import type { Education as EducationType, Job, Podcast } from '@types';
import React from 'react';

export const metadata = {
	title:
		'About Amir Sahar, a Senior Software Engineer and Consultant in Israel',
	description:
		'As a passionate front-end software developer, I create amazing websites and web apps to make the internet a better place.',
};

const getData = async () => {
	const podcasts: Podcast[] = await sanityClient.fetch(podcastsQuery);
	const jobs: Job[] = await sanityClient.fetch(jobsQuery);
	const education: EducationType[] = await sanityClient.fetch(educationQuery);

	return {
		education,
		jobs,
		podcasts,
	};
};

const AboutPage = async () => {
	const { education, jobs, podcasts } = await getData();

	return (
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl md:leading-normal lg:leading-normal">
					Hey, I&apos;m Amir Sahar
				</h1>
				<h2 className="mt-2 text-xl font-bold md:text-2xl">
					Senior Software Engineer from Israel
				</h2>
				<p className="mt-8">
					I am 28 years old and have been a web developer for as long as I can
					think. The technologies I work with are JavaScript, HTML and CSS with
					a focus on the frameworks React.js, Next.js, Node and Express. When it
					comes to software development, I believe in the principles of
					efficiency, scalability and speed without compromising quality.
				</p>
				<section id="tools" className="my-24">
					<Container>
						<h2 className="headline mt-24 text-center text-xl md:text-2xl lg:text-3xl">
							Some of my favourite tools
						</h2>

						<div className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-x-32 gap-y-4">
							<LogoNext className="w-32" aria-label="Next.js" />
							<LogoNx className="w-16" aria-label="Sanity" />
							<LogoNode className="w-32" aria-label="Node.js" />
							<LogoNest className="w-40" aria-label="Nest.js" />
							<LogoStorybook className="w-32" aria-label="Storybook" />
							<LogoReact className="w-20" aria-label="React" />
							<LogoCypress className="w-32" aria-label="Cypress" />
							<LogoTs className="w-20" aria-label="TypeScript" />
							<LogoDocker className="w-24" aria-label="Docker" />
						</div>
					</Container>
				</section>
				<h2 className="headline mb-4 mt-12 text-4xl">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here are some of the most relevant
					certifications I have achieved:
				</p>

				<Education education={education} />
			</Container>
		</AnimatePage>
	);
};

export default AboutPage;
