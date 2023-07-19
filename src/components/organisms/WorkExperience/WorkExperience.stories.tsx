/* eslint-disable import/no-anonymous-default-export */
import {
	WorkExperienceDesktop,
	WorkExperienceProps,
} from './WorkExperienceDesktop';

import { mockJobs } from '@mockdata';

export default {
	title: 'organisms/WorkExperience',
	component: WorkExperienceDesktop,
};

export const WorkExperienceStory = (args: WorkExperienceProps) => (
	<WorkExperienceDesktop {...args} />
);

WorkExperienceStory.storyName = 'WorkExperience';
WorkExperienceStory.args = {
	jobs: mockJobs,
};
