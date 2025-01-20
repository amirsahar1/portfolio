'use client';

import { BackgroundBeamsWithCollision } from '@components/atoms/BackgroundBeamsWithCollision/backgroundBeamsWithCollision';
import { Button } from '@components/atoms/Button';
import { ContentBlock } from '@components/atoms/ContentBlock';
import { IconDownload } from '@components/atoms/Icons';
import { Timeline } from '@components/atoms/Timeline/timeline';
import { WorkExperienceMobile } from '@components/organisms/WorkExperience/WorkExperienceMobile';

import type { Job as JobType } from '@types';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery } from 'usehooks-ts';

export interface WorkExperienceProps {
	jobs: JobType[];
}

const WorkExperience = ({ jobs }: WorkExperienceProps) => {
	const matches = useMediaQuery('(min-width: 768px)');
	const [showChild, setShowChild] = useState(false);
	useEffect(() => {
		setShowChild(true);
	}, []);

	if (!showChild) {
		return <WorkExperienceMobile jobs={jobs} />;
	}

	const mappedJobs = jobs.map((job: JobType) => {
		const from = dayjs(job.fromDate);
		const to = dayjs(job.toDate);
		return {
			title: (
				<div>
					<div className="mb-6">{`${from.format('YYYY')} - ${to.format(
						'YYYY'
					)}`}</div>
					<div className=" justify-items-center">
						<Image
							src={job.company.logo}
							alt={job.company.name}
							width={92}
							height={92}
							className="rounded-md"
						/>
					</div>
				</div>
			),
			content: (
				<div>
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
