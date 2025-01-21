'use client';

import { ContentBlock } from '@components/atoms/ContentBlock';
import { Timeline } from '@components/atoms/Timeline/timeline';

import type { Company, Job as JobType } from '@types';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export interface WorkExperienceProps {
	jobs: JobType[];
}

const clients = [
	{
		logo: 'https://cdn.sanity.io/images/6gcgnevh/production/af45cd446acc543b81fbad6a37b1e36e0d0b36f6-64x64.png',
		name: 'Elevance Health',
		url: 'https://www.elevancehealth.com/',
	},
	{
		logo: 'https://cdn.sanity.io/images/6gcgnevh/production/3a8de988e9e04a1301eef7b01863478fc8e97700-200x200.png',
		name: 'Eleos',
		url: 'https://eleos.health/',
	},
	{
		logo: 'https://cdn.sanity.io/images/6gcgnevh/production/ab59eb8b648d4194976df993ef98cbc6ad6480f4-256x256.png',
		name: 'the5ers',
		url: 'https://the5ers.com/',
	},
];
const WorkExperience = ({ jobs }: WorkExperienceProps) => {
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
							<div className="flex md:flex-col flex-row gap-4">
								{clients.map((cl) => (
									<Image
										key={cl.name}
										src={cl.logo}
										alt={cl.name}
										width={92}
										height={92}
										className="rounded-md"
									/>
								))}
							</div>
						) : (
							<Image
								src={job.company.logo}
								alt={job.company.name}
								width={92}
								height={92}
								className="rounded-md"
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
