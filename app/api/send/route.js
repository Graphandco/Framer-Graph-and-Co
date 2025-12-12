import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
	try {
		const body = await req.json();

		// Validation et sanitisation des entrées
		const { name, email, message } = body;

		// Validation basique
		if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 200) {
			return Response.json({ error: "Nom invalide" }, { status: 400 });
		}

		if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
			return Response.json({ error: "Email invalide" }, { status: 400 });
		}

		if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 5000) {
			return Response.json({ error: "Message invalide" }, { status: 400 });
		}

		// Sanitisation : retirer les caractères dangereux
		const sanitizedName = name.trim().slice(0, 200);
		const sanitizedEmail = email.trim().slice(0, 200);
		const sanitizedMessage = message.trim().slice(0, 5000);

		const { data, error } = await resend.emails.send({
			from: "Graph and Co <contact@graphandco.net>",
			to: ["contact@graphandco.com"],
			subject: "Nouveau message depuis le site Graph and Co",
			react: EmailTemplate({
				name: sanitizedName,
				email: sanitizedEmail,
				message: sanitizedMessage,
			}),
		});

		if (error) {
			console.error("Erreur Resend :", error);
			return Response.json({ error: "Erreur d'envoi." }, { status: 500 });
		}

		return Response.json({ success: true });
	} catch (err) {
		console.error("Erreur serveur :", err);
		return Response.json(
			{ error: "Erreur interne du serveur" },
			{ status: 500 }
		);
	}
}
