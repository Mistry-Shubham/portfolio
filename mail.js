import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const mail = async (data) => {
	try {
		const {
			CLIENT_ID,
			CLIENT_SECRET,
			REFRESH_TOKEN,
			REDIRECT_URI,
			GMAIL_USER,
			MY_MAIL,
		} = process.env;

		const oAuth2Client = new google.auth.OAuth2(
			CLIENT_ID,
			CLIENT_SECRET,
			REDIRECT_URI
		);
		oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

		const ACCESS_TOKEN = await oAuth2Client.getAccessToken();

		const transport = nodemailer.createTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				type: 'OAuth2',
				user: GMAIL_USER,
				clientId: CLIENT_ID,
				clientSecret: CLIENT_SECRET,
				refreshToken: REFRESH_TOKEN,
				accessToken: ACCESS_TOKEN,
			},
			tls: {
				rejectUnauthorized: false,
			},
		});

		const mailOptions = {
			from: `${data.name} <${GMAIL_USER}>`,
			to: MY_MAIL,
			subject: `Enquiry - ${data.subject}`,
			text: `Name :- ${data.name}\nEmail :- ${data.email}\n\n${data.message}`,
		};

		const result = await transport.sendMail(mailOptions);
		return result;
	} catch (err) {
		return err;
	}
};

export default mail;
