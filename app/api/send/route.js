import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
	try {
		const { data, error } = await resend.emails.send({
			from: "Graph and Co <contact-from@graphandco.net>",
			to: ["contact@graphandco.net"],
			subject: "Nouveau message depuis votre site Graph and Co",
			react: EmailTemplate({ firstName: "Reggio" }),
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
