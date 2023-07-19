import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { WorkExperience } from '@components/organisms/WorkExperience/WorkExperience';

import { sanityClient } from '@lib/sanity';

import { jobsQuery } from '@queries/jobs';

import { Job as JobType } from '@types';

export const metadata = {
	title: 'Software Engineering Case Studies – Amir Sahar',
	description:
		'Here you can find case studies of projects I have worked on over the last few years. Learn how I have overcome challenges.',
};

const getData: () => Promise<JobType[]> = async () => {
	const jobs: JobType[] = await sanityClient.fetch(jobsQuery);
	return jobs;
};

const ExperiencePage = async () => {
	const jobs = await getData();
	return (
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 pb-8 text-3xl md:text-5xl lg:text-6xl">
					Experience
				</h1>
				<WorkExperience jobs={jobs} />
			</Container>
		</AnimatePage>
	);
};

export default ExperiencePage;
