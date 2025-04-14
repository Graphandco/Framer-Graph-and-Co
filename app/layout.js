import { Outfit, Urbanist } from "next/font/google";
import "./globals.css";
import "./custom.scss";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
});

const urbanist = Urbanist({
	variable: "--font-urbanist",
	subsets: ["latin"],
});

export const metadata = {
	title: "Création de sites Web | Graph and Co",
	description:
		"Agence web à Colmar spécialisée dans la création de sites sur mesure. Graph and Co conçoit des sites rapides, esthétiques et orientés expérience utilisateur.",
	openGraph: {
		title: "Création de sites Web | Graph and Co",
		description:
			"Agence web à Colmar spécialisée dans la création de sites sur mesure. Graph and Co conçoit des sites rapides, esthétiques et orientés expérience utilisateur.",
		url: "https://graphandco.com",
		images: [
			{
				url: "https://graphandco.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Graph and Co - accueil",
			},
		],
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<ViewTransitions>
			<html lang="en">
				<head>
					<link rel="manifest" href="/manifest.json" />
					<link rel="icon" href="/icons/icon-192x192.png" />
					<meta name="theme-color" content="#ffffff" />
				</head>
				{/* <BodyClassHandler> */}
				<body
					className={`${outfit.variable} ${urbanist.variable} antialiased`}
				>
					<Header />
					<main className="relative z-10 bg-white">{children}</main>
					<ScrollToTopButton />
					<Footer />
				</body>
				{/* </BodyClassHandler> */}
			</html>
		</ViewTransitions>
	);
}
