import { TypeWriter } from '@components/atoms/TypeWriter';

import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
	const talkAbout = [
		'React',
		'JavaScript',
		'TypeScript',
		'Nest.js',
		'Mobx',
		'Next.js',
		'Angular',
		'Java',
		'RESTful APIs',
		'HTML',
		'CSS',
	];

	return (
		<section id="hero" className="relative isolate overflow-hidden">
			<div className="bg-gradient-from-t absolute inset-x-0 bottom-0 -z-10 h-24 from-off-white dark:from-slate-950 sm:h-32" />
			<div className="mx-auto max-w-7xl px-6 lg:px-8 lg:py-32">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
					<h1 className="headline max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto md:leading-normal lg:leading-normal">
						Hey, I&apos;m Amir Sahar
					</h1>
					<div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
						<p className="text-lg xl:text-xl leading-8 text-slate-600 dark:text-off-white">
							I am a passionate Software Engineer, specialised in front-end
							development using React and TypeScript.
							<br />
							You can talk to me about <TypeWriter strings={talkAbout} />.
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<Link
								href="/contact"
								className="rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-lg dark:shadow-sm dark:hover:shadow-white hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Get in touch
							</Link>
							<Link
								href="/about"
								className="text-sm font-semibold leading-6 text-slate-900 transition-all hover:text-slate-600 hover:scale-105 dark:text-slate-400 dark:hover:text-slate-200"
							>
								Read more <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
					<Image
						src="/assets/amir.jpg"
						alt="Photo of Amir Sahar"
						height={300}
						width={450}
						loading="eager"
						className="mt-10 aspect-[4/4] max-w-full rounded-2xl object-cover sm:mt-16 lg:ml-20 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
					/>
				</div>
			</div>
		</section>
	);
};
