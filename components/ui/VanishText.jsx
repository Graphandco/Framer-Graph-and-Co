"use client";
import { useRef } from "react";
import styles from "../../app/page.module.scss";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const word = "with framer-motion";

export default function ScrollParallax() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
	const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
	const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

	const images = [
		{
			src: "/contact/hero-contact.avif",
			y: 0,
		},
		{
			src: "/contact/hero-contact2.avif",
			y: lg,
		},
		{
			src: "/contact/hero-contact3.avif",
			y: md,
		},
	];

	return (
		<div ref={container} className={styles.container}>
			<div className={styles.body}>
				<motion.h1 style={{ y: sm }}>Parallax</motion.h1>
				<h1>Scroll</h1>
				<div className="text-2xl text-black">
					<p>
						{word.split("").map((letter, i) => {
							const y = useTransform(
								scrollYProgress,
								[0, 1],
								[0, Math.floor(Math.random() * -75) - 25]
							);
							return (
								<motion.span style={{ top: y }} key={`l_${i}`}>
									{letter}
								</motion.span>
							);
						})}
					</p>
				</div>
			</div>
			<div className={styles.images}>
				{images.map(({ src, y }, i) => {
					return (
						<motion.div
							style={{ y }}
							key={`i_${i}`}
							className={styles.imageContainer}
						>
							<Image
								src={src}
								// placeholder="blur"
								alt="image"
								fill
							/>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
