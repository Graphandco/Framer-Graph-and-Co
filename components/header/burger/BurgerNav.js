"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import NavLink from "../NavLink";

const BurgerNav = ({ isOpen, setIsOpen, navLinks }) => {
	const navVariants = {
		open: {
			x: "0%",
			borderTopLeftRadius: "0vw",
			borderBottomLeftRadius: "0vw",
			opacity: 1,
		},
		closed: {
			x: "100%",
			borderTopLeftRadius: "50vw",
			borderBottomLeftRadius: "50vw",
			opacity: 0,
		},
	};
	const linkWrapperVariants = {
		open: {
			transition: {
				staggerChildren: 0.1,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};
	const navLinkVariants = {
		open: { x: 0 },
		closed: { x: 25 },
	};

	const MotionNav = motion.create(NavLink);

	return (
		<motion.nav
			className="fixed top-0 bottom-0 left-0 right-0 w-full"
			animate={isOpen ? "open" : "closed"}
			variants={navVariants}
			initial="closed"
		>
			<motion.button
				className="text-3xl bg-foreground text-white hover:bg-primary transition-colors p-4 rounded-full absolute top-3 right-3 flex items-center justify-center"
				whileHover={{ rotate: "180deg" }}
				onClick={() => setIsOpen(false)}
				whileTap={{ scale: 0.9 }}
			>
				<X />
			</motion.button>
			<motion.div
				variants={linkWrapperVariants}
				className="flex flex-col gap-4 justify-center bg-white h-screen"
			>
				{navLinks.map((navlink, i) => (
					<MotionNav
						key={i}
						variants={navLinkVariants}
						transition={{
							type: "spring",
							damping: 3,
						}}
						whileHover={{
							y: -15,
							rotate: "-7.5deg",
						}}
						name={navlink.name}
						href={navlink.href}
						setIsOpen={setIsOpen}
						className="inline-block px-8 text-foreground z-10 w-fit font-black text-7xl hover:text-primary transition-colors"
						rel="nofollow"
					/>
				))}
			</motion.div>
		</motion.nav>
	);
};
export default BurgerNav;
