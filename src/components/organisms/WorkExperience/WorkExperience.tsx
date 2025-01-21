'use client';

import { AnimatedTooltip } from '@components/atoms/AnimatedTooltip/animatedTooltip';
import { ContentBlock } from '@components/atoms/ContentBlock';
import { Timeline } from '@components/atoms/Timeline/timeline';

import { Client as ClientType } from '@root/src/types/client';
import type { Job as JobType } from '@types';
import dayjs from 'dayjs';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export interface WorkExperienceProps {
	jobs: JobType[];
	clients: ClientType[];
}

const WorkExperience = ({ jobs, clients }: WorkExperienceProps) => {
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
						{job.company.name === 'Independent Consulting' ? (
							<div className="flex flex-row md:flex-col gap-6">
								<AnimatedTooltip
									items={clients.map((cl, index) => {
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
					<div className="text-2xl">{job.jobTitle}</div>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						<ContentBlock value={job.description} />
					</p>
				</div>
			),
		};
	});

	return (
		<div className="w-full">
			<Timeline data={mappedJobs} />
		</div>
	);
};

export { WorkExperience };
