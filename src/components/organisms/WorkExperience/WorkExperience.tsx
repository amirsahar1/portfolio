'use client';

import { AnimatedTooltip } from '@components/atoms/AnimatedTooltip/animatedTooltip';
import { Container } from '@components/atoms/Container';
import { ContentBlock } from '@components/atoms/ContentBlock';
import { Timeline } from '@components/atoms/Timeline/timeline';
import { Education } from '@components/organisms/Education';

import LogoTs from '@root/public/assets/tools/Typescript.svg';
import LogoAws from '@root/public/assets/tools/aws.svg';
import LogoCypress from '@root/public/assets/tools/cypress.svg';
import LogoDocker from '@root/public/assets/tools/docker.svg';
import LogoMongoDb from '@root/public/assets/tools/mongodb.svg';
import LogoNest from '@root/public/assets/tools/nest.svg';
import LogoNext from '@root/public/assets/tools/nextjs.svg';
import LogoNode from '@root/public/assets/tools/node.svg';
import LogoNx from '@root/public/assets/tools/nx.svg';
import LogoReact from '@root/public/assets/tools/react-framework.svg';
import LogoStorybook from '@root/public/assets/tools/storybook.svg';
import { Education as EducationType } from '@root/src/types/education';
import type { Job as JobType } from '@types';
import dayjs from 'dayjs';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export interface WorkExperienceProps {
	jobs: JobType[];
	education: EducationType[];
}

const WorkExperience = ({ jobs, education }: WorkExperienceProps) => {
	const mappedJobs = jobs.map((job: JobType) => {
		const from = dayjs(job.fromDate);
		const to = dayjs(job.toDate);
		return {
			title: (
				<div className=" justify-items-center">
					<div className="mb-0">{`${from.format('YYYY')} - ${
						job.toDate ? to.format('YYYY') : 'Present'
					}`}</div>
					<div className="text-lg mb-2">{job.company.name}</div>
					<div>
						{job.clients && job.clients.length > 0 ? (
							<div className="flex flex-row md:flex-col gap-6">
								<AnimatedTooltip
									items={job.clients.map((cl, index) => {
										return {
											id: index,
											name: cl.name,
											image: cl.logo,
											url: cl.url,
										};
									})}
								/>
							</div>
						) : (
							<AnimatedTooltip
								items={[
									{
										id: 1,
										name: job.company.name,
										image: job.company.logo,
										url: job.company.url,
									},
								]}
							/>
						)}
					</div>
				</div>
			),
			content: (
				<div>
					<div className="text-xl md:text-2xl">{job.jobTitle}</div>
					<div className="text-neutral-800 dark:text-neutral-200 font-normal mb-8">
						<ContentBlock value={job.description} />
					</div>
				</div>
			),
		};
	});

	return (
		<>
			<h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl md:leading-normal lg:leading-normal">
				Hey, I&apos;m Amir Sahar
			</h1>
			<h2 className="mt-2 text-xl font-bold md:text-2xl">
				Senior Software Engineer from Israel
			</h2>
			<p className="mt-8">
				I am 28 years old and have been a web developer for as long as I can
				think. The technologies I work with are JavaScript, HTML and CSS with a
				focus on the frameworks React.js, Next.js, Node and Express. When it
				comes to software development, I believe in the principles of
				efficiency, scalability and speed without compromising quality.
			</p>
			<section id="experience" className="mt-24">
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl xs:mb-0 md:-mb-16 ">
					Experience
				</h1>
				<div className="w-full">
					<Timeline data={mappedJobs} />
				</div>
			</section>
			<h2 className="headline mb-12 mt-24 text-center text-5xl">Education</h2>
			<Education education={education} />
			<h2 className="headline mb-12 mt-24 text-center text-5xl">Tools</h2>
			<section id="tools" className="mb-24">
				<Container>
					<div className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-x-32 gap-y-4">
						<LogoNext className="w-32" aria-label="Next.js" />
						<LogoMongoDb className="w-32 h-32" aria-label="Mongo" />
						<LogoNx className="w-16" aria-label="Sanity" />
						<LogoNode className="w-32" aria-label="Node.js" />
						<LogoNest className="w-40" aria-label="Nest.js" />
						<LogoAws className="w-32 h-32" aria-label="Aws" />
						<LogoStorybook className="w-32" aria-label="Storybook" />
						<LogoReact className="w-20" aria-label="React" />
						<LogoCypress className="w-32" aria-label="Cypress" />
						<LogoTs className="w-20" aria-label="TypeScript" />
						<LogoDocker className="w-24" aria-label="Docker" />
					</div>
				</Container>
			</section>
		</>
	);
};

export { WorkExperience };
