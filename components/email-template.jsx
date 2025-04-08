export const EmailTemplate = ({ firstName, email, message }) => (
	<div>
		<h2>Vous avez reçu un message de {firstName}</h2>
		<p>
			<strong>Email :</strong> {email}
		</p>
		<p>
			<strong>Message :</strong>
		</p>
		<p>{message}</p>
	</div>
);
