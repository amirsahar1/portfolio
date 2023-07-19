import { WorkExperienceDesktop } from '../WorkExperience';

import { mockJobs } from '@mockdata';
import { render } from '@testing-library/react';

jest.mock('@components/atoms/ContentBlock', () => ({
	ContentBlock: () => <div id="contentBlock" />,
}));

describe('WorkExperience', () => {
	it('renders correctly', () => {
		const { container } = render(
			<WorkExperienceDesktop jobs={[mockJobs[0]]} />
		);
		expect(container).toMatchSnapshot();
	});
});
