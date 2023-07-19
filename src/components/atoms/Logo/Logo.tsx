'use client';

import MoonCake from './mooncake.png';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
	hideName?: boolean;
}

const Logo = ({ hideName }: LogoProps) => {
	return (
		<Link href="/" passHref>
			<motion.div
				className="group relative flex items-center gap-4 whitespace-nowrap text-2xl font-bold transition duration-300 hover:transition"
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -10 }}
			>
				<Image
					src={MoonCake}
					width={48}
					height={48}
					quality={100}
					alt="Vectorised image of Amir Sahar"
					className="h-12 w-12 rounded-full"
				/>
				{!hideName && (
					<>
						<span className=" bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-purple-700 transition duration-300 group-hover:opacity-0">
							@amirsahar.74
						</span>
						<span className="absolute left-16 from-blue-500 to-purple-700 opacity-0 transition duration-300 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:opacity-100">
							Amir Sahar
						</span>
					</>
				)}
			</motion.div>
		</Link>
	);
};

export { Logo };
