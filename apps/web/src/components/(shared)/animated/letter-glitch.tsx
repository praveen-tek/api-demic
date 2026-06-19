"use client";
import { useCallback, useEffect, useRef } from "react";

type Letter = {
	char: string;
	color: string;
	targetColor: string;
	colorProgress: number;
};

const LetterGlitch = ({
	glitchColors = ["#2b4539", "#61dca3", "#61b3dc"],
	glitchSpeed = 50,
	centerVignette = false,
	outerVignette = true,
	smooth = true,
	characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789",
}: {
	glitchColors: string[];
	glitchSpeed: number;
	centerVignette: boolean;
	outerVignette: boolean;
	smooth: boolean;
	characters: string;
}) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const animationRef = useRef<number | null>(null);
	const letters = useRef<Letter[]>([]);
	const grid = useRef({ columns: 0, rows: 0 });
	const context = useRef<CanvasRenderingContext2D | null>(null);
	const lastGlitchTime = useRef(Date.now());
	const smoothRef = useRef(smooth);
	const glitchSpeedRef = useRef(glitchSpeed);

	useEffect(() => {
		smoothRef.current = smooth;
	}, [smooth]);
	useEffect(() => {
		glitchSpeedRef.current = glitchSpeed;
	}, [glitchSpeed]);

	const lettersAndSymbols = useRef(Array.from(characters));
	useEffect(() => {
		lettersAndSymbols.current = Array.from(characters);
	}, [characters]);

	const glitchColorsRef = useRef(glitchColors);
	useEffect(() => {
		glitchColorsRef.current = glitchColors;
	}, [glitchColors]);

	const fontSize = 16;
	const charWidth = 10;
	const charHeight = 20;

	const getRandomChar = useCallback(() => {
		return lettersAndSymbols.current[
			Math.floor(Math.random() * lettersAndSymbols.current.length)
		];
	}, []);

	const getRandomColor = useCallback(() => {
		return glitchColorsRef.current[
			Math.floor(Math.random() * glitchColorsRef.current.length)
		];
	}, []);

	const hexToRgb = useCallback((hex: string) => {
		const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, (_m, r, g, b) => r + r + g + g + b + b);
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16),
				}
			: null;
	}, []);

	const interpolateColor = useCallback(
		(
			start: { r: number; g: number; b: number },
			end: { r: number; g: number; b: number },
			factor: number,
		) => {
			return `rgb(${Math.round(start.r + (end.r - start.r) * factor)}, ${Math.round(start.g + (end.g - start.g) * factor)}, ${Math.round(start.b + (end.b - start.b) * factor)})`;
		},
		[],
	);

	const drawLetters = useCallback(() => {
		if (!context.current || letters.current.length === 0) return;
		const ctx = context.current;
		const { width, height } = canvasRef.current!.getBoundingClientRect();
		ctx.clearRect(0, 0, width, height);
		ctx.font = `${fontSize}px monospace`;
		ctx.textBaseline = "top";
		letters.current.forEach((letter: Letter, index: number) => {
			const x = (index % grid.current.columns) * charWidth;
			const y = Math.floor(index / grid.current.columns) * charHeight;
			ctx.fillStyle = letter.color;
			ctx.fillText(letter.char, x, y);
		});
	}, []);

	const initializeLetters = useCallback(
		(columns: number, rows: number) => {
			grid.current = { columns, rows };
			letters.current = Array.from({ length: columns * rows }, () => ({
				char: getRandomChar(),
				color: getRandomColor(),
				targetColor: getRandomColor(),
				colorProgress: 1,
			}));
		},
		[getRandomChar, getRandomColor],
	);

	const resizeCanvas = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const parent = canvas.parentElement;
		if (!parent) return;
		const dpr = window.devicePixelRatio || 1;
		const rect = parent.getBoundingClientRect();
		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;
		canvas.style.width = `${rect.width}px`;
		canvas.style.height = `${rect.height}px`;
		if (context.current) context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
		const columns = Math.ceil(rect.width / charWidth);
		const rows = Math.ceil(rect.height / charHeight);
		initializeLetters(columns, rows);
		drawLetters();
	}, [initializeLetters, drawLetters]);

	const updateLetters = useCallback(() => {
		if (!letters.current.length) return;
		const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));
		for (let i = 0; i < updateCount; i++) {
			const index = Math.floor(Math.random() * letters.current.length);
			if (!letters.current[index]) continue;
			letters.current[index].char = getRandomChar();
			letters.current[index].targetColor = getRandomColor();
			if (!smoothRef.current) {
				letters.current[index].color = letters.current[index].targetColor;
				letters.current[index].colorProgress = 1;
			} else {
				letters.current[index].colorProgress = 0;
			}
		}
	}, [getRandomChar, getRandomColor]);

	const handleSmoothTransitions = useCallback(() => {
		let needsRedraw = false;
		letters.current.forEach((letter: Letter) => {
			if (letter.colorProgress < 1) {
				letter.colorProgress = Math.min(1, letter.colorProgress + 0.05);
				const startRgb = hexToRgb(letter.color);
				const endRgb = hexToRgb(letter.targetColor);
				if (startRgb && endRgb) {
					letter.color = interpolateColor(
						startRgb,
						endRgb,
						letter.colorProgress,
					);
					needsRedraw = true;
				}
			}
		});
		if (needsRedraw) drawLetters();
	}, [drawLetters, hexToRgb, interpolateColor]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		context.current = canvas.getContext("2d");
		resizeCanvas();

		const loop = () => {
			const now = Date.now();
			if (now - lastGlitchTime.current >= glitchSpeedRef.current) {
				updateLetters();
				drawLetters();
				lastGlitchTime.current = now;
			}
			if (smoothRef.current) handleSmoothTransitions();
			animationRef.current = requestAnimationFrame(loop);
		};

		animationRef.current = requestAnimationFrame(loop);

		let resizeTimeout: ReturnType<typeof setTimeout>;
		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				cancelAnimationFrame(animationRef.current as number);
				resizeCanvas();
				animationRef.current = requestAnimationFrame(loop);
			}, 100);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			cancelAnimationFrame(animationRef.current!);
			window.removeEventListener("resize", handleResize);
		};
	}, [resizeCanvas, updateLetters, drawLetters, handleSmoothTransitions]);

	return (
		<div className="relative w-full h-full bg-black overflow-hidden">
			<canvas ref={canvasRef} className="block w-full h-full" />
			{outerVignette && (
				<div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_100%)]" />
			)}
			{centerVignette && (
				<div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_60%)]" />
			)}
		</div>
	);
};

export default LetterGlitch;
