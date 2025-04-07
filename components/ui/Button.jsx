"use client";

import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import NavLink from "../header/NavLink";

export default function Button({
	white = false,
	outline = false,
	full = false,
	muted = false,
	small = false,
	blank = false,
	icon = <MdOutlineSubdirectoryArrowRight />,
	children,
	href,
	onClick,
	className = "",
}) {
	const baseClasses = `
		relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-full
		transition-all duration-750 cursor-pointer
		before:absolute before:inset-0 before:-z-10
		before:translate-x-[200%] before:translate-y-[200%] before:scale-[2.5]
		before:rounded-full before:transition-transform before:duration-750
		before:content-[""]
		hover:scale-105 active:scale-95
		hover:before:translate-x-0 hover:before:translate-y-0
		shadow-[0_7px_15px_rgba(0,0,0,0.15),_0_5px_5px_rgba(0,0,0,0.1)]
	`;

	const sizeClasses = small ? "px-3 py-1" : "px-4 py-2 text-base";

	const spanClasses =
		"transition-transform duration-750 group-hover:scale-90";

	const iconWithSize = (
		<span
			className={
				small ? "text-base leading-none" : "text-xl leading-none"
			}
		>
			{icon}
		</span>
	);

	let variantClasses = "";

	if (outline) {
		variantClasses = white
			? "bg-transparent text-white border border-white before:bg-white/10"
			: "bg-transparent text-black border border-black before:bg-black/10";
	} else {
		variantClasses = white
			? "bg-white text-black before:bg-black/30"
			: "bg-black text-white before:bg-white/30";
	}

	if (muted) {
		variantClasses += " opacity-50 cursor-not-allowed hover:scale-100";
	}

	if (full) {
		variantClasses += " w-full";
	}

	const button = (
		<button
			className={`group ${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
			onClick={muted ? undefined : onClick}
			disabled={muted}
		>
			{iconWithSize}
			<span className={spanClasses}>{children}</span>
		</button>
	);

	if (href) {
		return (
			<NavLink
				href={href}
				target={blank ? "_blank" : undefined}
				rel={blank ? "noopener noreferrer" : undefined}
			>
				{button}
			</NavLink>
		);
	}

	return button;
}
