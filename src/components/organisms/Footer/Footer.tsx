import { Container } from '@components/atoms/Container';
import {
	IconGithub,
	IconInstagram,
	IconLinkedin,
	IconTwitter,
} from '@components/atoms/Icons';
import { SocialIcons } from '@components/molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="mt-8 py-8 md:mt-20">
			<Container className="flex justify-between">
				<span>&copy; {new Date().getFullYear()} Amir sahar</span>
				<SocialIcons
					profiles={[
						{
							name: 'Github',
							url: 'https://github.com/amirsahar1',
							icon: <IconGithub />,
						},
						{
							name: 'LinkedIn',
							url: 'www.linkedin.com/in/amir-sahar-89145011a',
							icon: <IconLinkedin />,
						},
					]}
				/>
			</Container>
		</footer>
	);
};

export { Footer };
