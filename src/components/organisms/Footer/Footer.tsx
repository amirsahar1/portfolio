import { BackgroundBeamsWithCollision } from '@components/atoms/BackgroundBeamsWithCollision/backgroundBeamsWithCollision';
import { Button } from '@components/atoms/Button';
import { Container } from '@components/atoms/Container';
import {
	IconDownload,
	IconGithub,
	IconInstagram,
	IconLinkedin,
	IconTwitter,
} from '@components/atoms/Icons';
import { SocialIcons } from '@components/molecules/SocialIcons';

import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className="pt-12">
			<div className="relative bg-gradient-to-b from-off-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800">
				<span className="absolute bottom-4 md:bottom-12 left-4  md:left-16">
					&copy; {new Date().getFullYear()} Amir Sahar
				</span>

				<BackgroundBeamsWithCollision>
					<Container className="flex justify-center mb-0 sm:mb-32 mt-12 md:mt-20">
						<div id="cv-download">
							<h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
								Interested in what I have to offer?{' '}
								<div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
									<div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
										<span className="">Feel free to reach out</span>
									</div>
									<div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
										<span className="">Feel free to reach out</span>
									</div>
								</div>
							</h2>
							<p className="sm:text-md md:text-xl leading-8 text-slate-600 dark:text-off-white mt-4 text-center">
								I am happy to have a chat about relevant projects to work on.
								Below you find a download link for my up-to-date CV If you are
								interested in working with me, please contact me via{' '}
								<Link
									href="/contact"
									className="underlined relative border-b-2 border-grey-300 font-bold hover:border-b-0 dark:border-grey-700"
								>
									the contact form
								</Link>
							</p>

							<div className="mt-8  flex justify-center gap-6 items-baseline">
								<Button
									href="/resume.pdf"
									download={true}
									className="group flex gap-2 whitespace-nowrap"
								>
									<IconDownload />
									Download my CV
								</Button>
							</div>
						</div>
					</Container>
				</BackgroundBeamsWithCollision>
				<SocialIcons
					className="absolute bottom-4 md:bottom-12 right-4  md:right-16"
					profiles={[
						{
							name: 'Github',
							url: 'https://github.com/amirsahar1',
							icon: <IconGithub />,
						},
						{
							name: 'LinkedIn',
							url: 'https://linkedin.com/in/amir-sahar-89145011a',
							icon: <IconLinkedin />,
						},
					]}
				/>
			</div>
		</footer>
	);
};

export { Footer };
