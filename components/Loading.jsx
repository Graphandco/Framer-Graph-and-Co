const Loading = () => {
	return (
		<div>
			<CutoutTextLoader
				height="50vh"
				background="white"
				imgUrl="/loading.avif"
			/>
		</div>
	);
};

const CutoutTextLoader = ({ height, background, imgUrl }) => {
	return (
		<div className="relative" style={{ height }}>
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(${imgUrl})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			/>
			<div
				style={{ background }}
				className="absolute inset-0 animate-pulse z-10"
			/>
			<span
				className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
				style={{
					backgroundImage: `url(${imgUrl})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					fontSize: "clamp(3rem, 12vw, 10rem)",
					lineHeight: height,
				}}
			>
				Chargement...
			</span>
		</div>
	);
};

export default Loading;
