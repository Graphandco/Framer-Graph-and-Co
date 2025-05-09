"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { RxThickArrowLeft, RxThickArrowRight } from "react-icons/rx";

export default function DistortedSlider({ images }) {
	const canvasRef = useRef(null);
	const targetPositionRef = useRef(0);
	const targetDistortionFactorRef = useRef(0);

	useEffect(() => {
		if (!canvasRef.current || !images || images.length === 0) return;

		const canvas = canvasRef.current;
		const renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			preserveDrawingBuffer: true,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		const scene = new THREE.Scene();
		// scene.background = new THREE.Color(0xe3e3db);
		const camera = new THREE.PerspectiveCamera(
			45,
			window.innerWidth / window.innerHeight,
			0.1,
			100
		);
		camera.position.z = 5;

		const settings = {
			wheelSensitivity: 0.01,
			touchSensitivity: 0.01,
			momentumMultiplier: 2,
			smoothing: 0.1,
			slideLerp: 0.075,
			distortionDecay: 0.95,
			maxDistortion: 2.5,
			distortionSensitivity: 0.15,
			distortionSmoothing: 0.075,
		};

		const slideWidth = 3.0;
		const slideHeight = 1.5;
		const gap = 0.1;
		const slideCount = 10;
		const imagesCount = images.length;
		const totalWidth = slideCount * (slideWidth + gap);
		const slideUnit = slideWidth + gap;

		const slides = [];
		let currentPosition = 0;
		let isScrolling = false;
		let autoScrollSpeed = 0;
		let lastTime = 0;
		let touchStartX = 0;
		let touchLastX = 0;
		let peakVelocity = 0;
		let currentDistortionFactor = 0;
		const velocityHistory = [0, 0, 0, 0, 0];

		const correctImageColor = (texture) => {
			texture.colorSpace = THREE.SRGBColorSpace;
			return texture;
		};

		const createSlide = (index) => {
			const geometry = new THREE.PlaneGeometry(
				slideWidth,
				slideHeight,
				32,
				16
			);
			const material = new THREE.MeshBasicMaterial({
				color: new THREE.Color("#ffffff"),
				side: THREE.DoubleSide,
			});
			const mesh = new THREE.Mesh(geometry, material);
			mesh.position.x = index * slideUnit;
			mesh.userData.originalVertices = [
				...geometry.attributes.position.array,
			];
			mesh.userData.index = index;

			const imageIndex = index % imagesCount;
			const imagePath = images[imageIndex];

			new THREE.TextureLoader().load(
				imagePath,
				(texture) => {
					correctImageColor(texture);
					material.map = texture;
					material.needsUpdate = true;

					const imgAspect =
						texture.image.width / texture.image.height;
					const slideAspect = slideWidth / slideHeight;

					if (imgAspect > slideAspect) {
						mesh.scale.y = slideAspect / imgAspect;
					} else {
						mesh.scale.x = imgAspect / slideAspect;
					}
				},
				undefined,
				(err) => console.warn(`Couldn't load image ${imagePath}`, err)
			);

			scene.add(mesh);
			slides.push(mesh);
		};

		for (let i = 0; i < slideCount; i++) {
			createSlide(i);
		}

		slides.forEach((slide) => {
			slide.position.x -= totalWidth / 2;
			slide.userData.targetX = slide.position.x;
			slide.userData.currentX = slide.position.x;
		});

		const updateCurve = (mesh, worldPositionX, distortionFactor) => {
			const distortionCenter = new THREE.Vector2(0, 0);
			const distortionRadius = 2.0;
			const maxCurvature = settings.maxDistortion * distortionFactor;

			const positionAttribute = mesh.geometry.attributes.position;
			const originalVertices = mesh.userData.originalVertices;

			for (let i = 0; i < positionAttribute.count; i++) {
				const x = originalVertices[i * 3];
				const y = originalVertices[i * 3 + 1];
				const vertexWorldPosX = worldPositionX + x;

				const distFromCenter = Math.sqrt(
					Math.pow(vertexWorldPosX - distortionCenter.x, 2) +
						Math.pow(y - distortionCenter.y, 2)
				);

				const distortionStrength = Math.max(
					0,
					1 - distFromCenter / distortionRadius
				);
				const curveZ =
					Math.pow(
						Math.sin((distortionStrength * Math.PI) / 2),
						1.5
					) * maxCurvature;

				positionAttribute.setZ(i, curveZ);
			}

			positionAttribute.needsUpdate = true;
			mesh.geometry.computeVertexNormals();
		};

		// === Events ===
		window.addEventListener("keydown", (e) => {
			if (e.key === "ArrowLeft") {
				targetPositionRef.current += slideUnit;
				targetDistortionFactorRef.current = Math.min(
					1.0,
					targetDistortionFactorRef.current + 0.3
				);
			} else if (e.key === "ArrowRight") {
				targetPositionRef.current -= slideUnit;
				targetDistortionFactorRef.current = Math.min(
					1.0,
					targetDistortionFactorRef.current + 0.3
				);
			}
		});

		window.addEventListener(
			"wheel",
			(e) => {
				e.preventDefault();
				const wheelStrength = Math.abs(e.deltaY) * 0.001;
				targetDistortionFactorRef.current = Math.min(
					1.0,
					targetDistortionFactorRef.current + wheelStrength
				);
				targetPositionRef.current -=
					e.deltaY * settings.wheelSensitivity;
				isScrolling = true;
				autoScrollSpeed =
					Math.min(Math.abs(e.deltaY) * 0.0005, 0.05) *
					Math.sign(e.deltaY);

				clearTimeout(window.scrollTimeout);
				window.scrollTimeout = setTimeout(() => {
					isScrolling = false;
				}, 150);
			},
			{ passive: false }
		);

		window.addEventListener("touchstart", (e) => {
			touchStartX = e.touches[0].clientX;
			touchLastX = touchStartX;
			isScrolling = false;
		});

		window.addEventListener("touchmove", (e) => {
			e.preventDefault();
			const touchX = e.touches[0].clientX;
			const deltaX = touchX - touchLastX;
			touchLastX = touchX;
			const touchStrength = Math.abs(deltaX) * 0.02;
			targetDistortionFactorRef.current = Math.min(
				1.0,
				targetDistortionFactorRef.current + touchStrength
			);
			targetPositionRef.current -= deltaX * settings.touchSensitivity;
			isScrolling = true;
		});

		window.addEventListener("touchend", () => {
			const velocity = (touchLastX - touchStartX) * 0.005;
			if (Math.abs(velocity) > 0.5) {
				autoScrollSpeed =
					-velocity * settings.momentumMultiplier * 0.05;
				targetDistortionFactorRef.current = Math.min(
					1.0,
					Math.abs(velocity) * 3 * settings.distortionSensitivity
				);
				isScrolling = true;
				setTimeout(() => {
					isScrolling = false;
				}, 800);
			}
		});

		window.addEventListener("resize", () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		});

		const animate = (time) => {
			requestAnimationFrame(animate);

			const deltaTime = lastTime ? (time - lastTime) / 1000 : 0.016;
			lastTime = time;
			const prevPos = currentPosition;

			if (isScrolling) {
				targetPositionRef.current += autoScrollSpeed;
				autoScrollSpeed *= Math.max(
					0.92,
					0.97 - Math.abs(autoScrollSpeed) * 0.5
				);
				if (Math.abs(autoScrollSpeed) < 0.001) autoScrollSpeed = 0;
			}

			currentPosition +=
				(targetPositionRef.current - currentPosition) *
				settings.smoothing;

			const currentVelocity =
				Math.abs(currentPosition - prevPos) / deltaTime;
			velocityHistory.push(currentVelocity);
			velocityHistory.shift();

			const avgVelocity =
				velocityHistory.reduce((sum, val) => sum + val, 0) /
				velocityHistory.length;

			if (avgVelocity > peakVelocity) peakVelocity = avgVelocity;
			const velocityRatio = avgVelocity / (peakVelocity + 0.001);
			const isDecelerating = velocityRatio < 0.7 && peakVelocity > 0.5;
			peakVelocity *= 0.99;

			const movementDistortion = Math.min(1.0, currentVelocity * 0.1);
			if (currentVelocity > 0.05) {
				targetDistortionFactorRef.current = Math.max(
					targetDistortionFactorRef.current,
					movementDistortion
				);
			}

			if (isDecelerating || avgVelocity < 0.2) {
				const decayRate = isDecelerating
					? settings.distortionDecay
					: settings.distortionDecay * 0.9;
				targetDistortionFactorRef.current *= decayRate;
			}

			currentDistortionFactor +=
				(targetDistortionFactorRef.current - currentDistortionFactor) *
				settings.distortionSmoothing;

			slides.forEach((slide, i) => {
				let baseX = i * slideUnit - currentPosition;
				baseX = ((baseX % totalWidth) + totalWidth) % totalWidth;
				if (baseX > totalWidth / 2) baseX -= totalWidth;

				const isWrapping =
					Math.abs(baseX - slide.userData.targetX) > slideWidth * 2;
				if (isWrapping) slide.userData.currentX = baseX;

				slide.userData.targetX = baseX;
				slide.userData.currentX +=
					(slide.userData.targetX - slide.userData.currentX) *
					settings.slideLerp;

				if (Math.abs(slide.userData.currentX) < totalWidth) {
					slide.position.x = slide.userData.currentX;
					updateCurve(
						slide,
						slide.position.x,
						currentDistortionFactor
					);
				}
			});

			renderer.render(scene, camera);
		};

		animate();

		return () => {
			renderer.dispose();
			slides.forEach((slide) => slide.geometry.dispose());
		};
	}, [images]);

	return (
		<div className="relative w-full h-screen">
			<canvas ref={canvasRef} className="w-full h-full block" />

			{/* Flèches de navigation */}
			<div className="absolute bottom-[15%] left-0 right-0 flex justify-center gap-16 px-10 pointer-events-none">
				<RxThickArrowLeft
					onClick={() => {
						targetDistortionFactorRef.current = Math.min(
							1.0,
							targetDistortionFactorRef.current + 0.3
						);
						targetPositionRef.current += 3.1;
					}}
					className="cursor-pointer text-white w-12 h-12 flex items-center justify-center pointer-events-auto scale-100 hover:scale-120 transition-all"
				>
					←
				</RxThickArrowLeft>
				<RxThickArrowRight
					onClick={() => {
						targetDistortionFactorRef.current = Math.min(
							1.0,
							targetDistortionFactorRef.current + 0.3
						);
						targetPositionRef.current -= 3.1;
					}}
					className="cursor-pointer text-white w-12 h-12 flex items-center justify-center pointer-events-auto scale-100 hover:scale-120 transition-all"
				>
					→
				</RxThickArrowRight>
			</div>
		</div>
	);
}
