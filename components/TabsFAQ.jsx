"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import useMeasure from "react-use-measure";
import Button from "./ui/Button";

export const TabsFAQ = () => {
	const [selected, setSelected] = useState(TABS[0]);

	return (
		<section className="wrapper bg-black/5">
			<Tabs selected={selected} setSelected={setSelected} />
			<Questions selected={selected} />
		</section>
	);
};

const Tabs = ({ selected, setSelected }) => {
	return (
		<div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
			{TABS.map((tab) => (
				<Button
					onClick={() => setSelected(tab)}
					className={`relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 ${
						selected === tab
							? "border-violet-500 text-slate-50"
							: "border-slate-600 bg-transparent text-slate-400"
					}`}
					key={tab}
				>
					<span className="relative z-10">{tab}</span>
					<AnimatePresence>
						{selected === tab && (
							<motion.span
								initial={{ y: "100%" }}
								animate={{ y: "0%" }}
								exit={{ y: "100%" }}
								transition={{
									duration: 0.5,
									ease: "backIn",
								}}
								className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600"
							/>
						)}
					</AnimatePresence>
				</Button>
			))}
		</div>
	);
};

const Questions = ({ selected }) => {
	return (
		<div className="mx-auto mt-12 max-w-3xl">
			<AnimatePresence mode="wait">
				{Object.entries(QUESTIONS).map(([tab, questions]) => {
					return selected === tab ? (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{
								duration: 0.5,
								ease: "backIn",
							}}
							className="space-y-4"
							key={tab}
						>
							{questions.map((q, idx) => (
								<Question key={idx} {...q} />
							))}
						</motion.div>
					) : undefined;
				})}
			</AnimatePresence>
		</div>
	);
};

const Question = ({ question, answer }) => {
	const [ref, { height }] = useMeasure();
	const [open, setOpen] = useState(false);

	return (
		<motion.div
			animate={open ? "open" : "closed"}
			className={`rounded-xl px-4 transition-colors ${
				open ? "bg-white" : "bg-white"
			}`}
		>
			<button
				onClick={() => setOpen((pv) => !pv)}
				className="flex w-full items-center justify-between gap-4 py-4"
			>
				<span
					className={`text-left text-lg font-medium transition-colors ${
						open ? "text-foreground" : "text-foreground"
					}`}
				>
					{question}
				</span>
				<motion.span
					variants={{
						open: {
							rotate: "45deg",
						},
						closed: {
							rotate: "0deg",
						},
					}}
				>
					<FiPlus
						className={`text-lg transition-colors cursor-pointer ${
							open ? "text-foreground" : "text-foreground"
						}`}
					/>
				</motion.span>
			</button>
			<motion.div
				initial={false}
				animate={{
					height: open ? height : "0px",
					marginBottom: open ? "24px" : "0px",
				}}
				className="overflow-hidden"
			>
				<p ref={ref}>{answer}</p>
			</motion.div>
		</motion.div>
	);
};

const TABS = ["Web dev", "Mobile dev", "UI/UX", "Copywriting"];

const QUESTIONS = {
	"Web dev": [
		{
			question: "What is web development?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "How do I know if I need it?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "What does it cost?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "What about SEO?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
	],
	"Mobile dev": [
		{
			question: "What is mobile development?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "Can you do both iOS and Android?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "Can you help with app store optimization?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "How long does it take?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
	],
	"UI/UX": [
		{
			question: "What is UI/UX?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "Can you audit my existing site?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "How do you perform research?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "Does it make sense for my company?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
	],
	Copywriting: [
		{
			question: "What is copywriting?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "Can you write my blog?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "Can you also help with ad design?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "How much does it cost?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
	],
};
