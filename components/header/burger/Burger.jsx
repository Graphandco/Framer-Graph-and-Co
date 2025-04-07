"use client";
import { useState } from "react";
// import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { AlignJustify } from "lucide-react";
import { RiMenu3Fill } from "react-icons/ri";
import { VscMenu } from "react-icons/vsc";

import { motion } from "framer-motion";
import BurgerNav from "./BurgerNav";

const Burger = ({ navLinks }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="items-center text-white flex md:hidden">
			<motion.button
				whileHover={{ rotate: "180deg" }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setIsOpen(true)}
				className="text-3xl text-white transition-colors px-3 py-1 sm:py-3 cursor-pointer"
			>
				<VscMenu />
			</motion.button>
			<BurgerNav
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				navLinks={navLinks}
			/>
		</div>
	);
};

export default Burger;
