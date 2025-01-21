import { Client } from '@root/src/types/client';
import type { BlockContent, Company } from '@types';

export interface Job {
	jobTitle: string;
	company: Company;
	clients: Client[] | null;
	description: BlockContent[];
	fromDate: string;
	toDate: string | null;
	skills: string[];
}
