import nodemailer from 'nodemailer';

const mail = async (data) => {
	try {
		const { GMAIL_APP_PASS, GMAIL_USER, MY_MAIL } = process.env;

		const transport = nodemailer.createTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: GMAIL_USER,
				pass: GMAIL_APP_PASS,
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
