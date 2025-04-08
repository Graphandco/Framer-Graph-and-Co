"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
	const [isEmailSent, setIsEmailSent] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		try {
			const res = await fetch("/api/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (res.ok) {
				setIsEmailSent(true);
				reset();
			} else {
				console.error("Erreur serveur");
			}
		} catch (error) {
			console.error("Erreur réseau", error);
		}
	};

	if (isEmailSent) {
		return (
			<div className="bg-green-100 text-green-800 p-6 rounded-lg text-center">
				✅ Votre message a bien été envoyé.
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="max-w-xl w-full space-y-6"
		>
			<div>
				<label
					htmlFor="firstName"
					className="block text-sm font-medium text-gray-700"
				>
					Prénom
				</label>
				<input
					type="text"
					id="firstName"
					{...register("firstName", { required: true })}
					className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-black focus:ring-black"
				/>
				{errors.firstName && (
					<p className="text-sm text-red-500">Ce champ est requis</p>
				)}
			</div>

			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700"
				>
					Email
				</label>
				<input
					type="email"
					id="email"
					{...register("email", { required: true })}
					className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-black focus:ring-black"
				/>
				{errors.email && (
					<p className="text-sm text-red-500">Ce champ est requis</p>
				)}
			</div>

			<div>
				<label
					htmlFor="message"
					className="block text-sm font-medium text-gray-700"
				>
					Message
				</label>
				<textarea
					id="message"
					rows="5"
					{...register("message", { required: true })}
					className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-black focus:ring-black"
				></textarea>
				{errors.message && (
					<p className="text-sm text-red-500">Ce champ est requis</p>
				)}
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{isSubmitting ? "Envoi en cours..." : "Envoyer"}
			</button>
		</form>
	);
}
