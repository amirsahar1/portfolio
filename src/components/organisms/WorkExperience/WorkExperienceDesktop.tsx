'use client';

import { Button } from '@components/atoms/Button';
import { ContentBlock } from '@components/atoms/ContentBlock';
import { Job } from '@components/molecules/Job';

import type { Job as JobType } from '@types';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export interface WorkExperienceProps {
	jobs: JobType[];
}

const WorkExperienceDesktop = ({ jobs }: WorkExperienceProps) => {
	const Spacer = () => <div className="md:w-1/8 w-12 shrink-0 grow-0" />;
	return (
		<div className="px-2 lg:w-2/3 mx-auto">
			<Carousel
				showThumbs={false}
				interval={4000}
				swipeable={false}
				axis="horizontal"
				className="relative"
				renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
					hasPrev && (
						<div className="absolute flex justify-center items-center top-0 bottom-0  p-3 cursor-pointer z-20">
							<Button
								onClick={clickHandler}
								className="hover:shadow-none opacity-60 active:opacity-100"
							>
								<AiOutlineArrowLeft />
							</Button>
						</div>
					)
				}
				renderArrowNext={(clickHandler, hasNext, labelPrev) =>
					hasNext && (
						<div className="absolute flex justify-center items-center top-0 bottom-0  p-3 cursor-pointer z-20 right-0">
							<Button
								onClick={clickHandler}
								className="shadow-none opacity-60 active:opacity-100"
							>
								<AiOutlineArrowRight />
							</Button>
						</div>
					)
				}
				showArrows={true}
			>
				{jobs.map(
					({ company, jobTitle, fromDate, toDate, skills, description }) => (
						<div
							className="w-[calc(100% + 2rem)] mx-4 text-start"
							key={`${jobTitle}-${company.name}`}
						>
							<Job
								company={company}
								jobTitle={jobTitle}
								fromDate={fromDate}
								toDate={toDate}
								skills={skills}
							>
								<ContentBlock value={description} />
							</Job>
						</div>
					)
				)}
			</Carousel>
			<Spacer />
		</div>
	);
};

export { WorkExperienceDesktop };
