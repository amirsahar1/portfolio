import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import nodemailer, { SentMessageInfo } from 'nodemailer';

// eslint-disable-next-line @typescript-eslint/no-var-requires

const {
	serverRuntimeConfig: { brevoApiKey },
} = getConfig();

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { firstName, lastName, company, email, subject, message } = req.body;

	if (!email) {
		return res.status(400).json({ error: 'Email is required' });
	}
	const ticketNumber =
		Math.random().toString(36).substring(2, 4).toUpperCase() +
		Math.random().toString().substring(2, 12);
	const transporter = nodemailer.createTransport({
		host: 'smtp-relay.brevo.com',
		port: 587,
		auth: {
			user: 'amir@amir-sahar.com',
			pass: brevoApiKey,
		},
	});

	try {
		await new Promise((resolve, reject) => {
			transporter.sendMail(
				{
					from: `${firstName} ${lastName}${
						company ? `(${company})` : ''
					} <amir@amir-sahar.com>`,
					to: 'amir@amir-sahar.com',
					replyTo: email,
					subject: `Website Contact: ${subject} (Ticket ${ticketNumber})`,
					text: message,
					html: `<div>
            <p>${message}</p>
          </div>`,
				},
				(error: Error | null, info: SentMessageInfo) => {
					if (error) {
						reject(error);
					} else {
						resolve(info);
					}
				}
			);
		});
		return res.status(200).json({ status: 'success' });
	} catch (err) {
		return res.status(500).json({ errorMessage: err });
	}
};

export default contactHandler;
