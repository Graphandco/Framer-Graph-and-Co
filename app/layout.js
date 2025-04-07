import { Outfit, Urbanist } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
// import BodyClassHandler from "@/lib/BodyClassHandler";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
});

const urbanist = Urbanist({
	variable: "--font-urbanist",
	subsets: ["latin"],
});

export const metadata = {
	title: "Graph and Co ",
	description: "Graph and Co | Création de sites web",
};

export default function RootLayout({ children }) {
	return (
		<ViewTransitions>
			<html lang="en">
				{/* <BodyClassHandler> */}
				<body
					className={`${outfit.variable} ${urbanist.variable} antialiased`}
				>
					<Header />
					<main className="relative z-10 bg-white">{children}</main>
					<Footer />
				</body>
				{/* </BodyClassHandler> */}
			</html>
		</ViewTransitions>
	);
}
