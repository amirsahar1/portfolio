'use client';

import { ErrorFallback } from '@components/templates/ErrorFallback';

import { NextPageContext } from 'next';

interface ErrorProps {
	error: {
		message: string;
		status: number;
	};
	reset: () => void;
}

const Error = async (props: ErrorProps) => {
	return <ErrorFallback error={props?.error} reset={props?.reset} />;
};

export default Error;
