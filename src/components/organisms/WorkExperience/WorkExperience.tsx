'use client';

import { WorkExperienceDesktop } from '@components/organisms/WorkExperience/WorkExperienceDesktop';
import { WorkExperienceMobile } from '@components/organisms/WorkExperience/WorkExperienceMobile';

import type { Job as JobType } from '@types';
import React, { useEffect, useState } from 'react';
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
	return matches ? (
		<WorkExperienceDesktop jobs={jobs} />
	) : (
		<WorkExperienceMobile jobs={jobs} />
	);
};

export { WorkExperience };
