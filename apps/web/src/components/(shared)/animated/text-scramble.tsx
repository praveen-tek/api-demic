"use client";
import { MotionProps, motion } from "motion/react";
import { type JSX, useCallback, useEffect, useRef, useState } from "react";

export type TextScrambleProps = {
	children: string;
	duration?: number;
	speed?: number;
	characterSet?: string;
	as?: React.ElementType;
	className?: string;
	trigger?: boolean;
	onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function TextScramble({
	children,
	duration = 0.8,
	speed = 0.04,
	characterSet = defaultChars,
	className,
	as: Component = "p",
	trigger = true,
	onScrambleComplete,
	...props
}: TextScrambleProps) {
	const MotionComponent = motion.create(
		Component as keyof JSX.IntrinsicElements,
	);
	const [scrambledText, setScrambledText] = useState<string | null>(null);
	const isAnimating = useRef(false);
	const displayText = scrambledText ?? children;

	const scramble = useCallback(async () => {
		if (isAnimating.current) return;
		isAnimating.current = true;

		const steps = duration / speed;
		let step = 0;

		const interval = setInterval(() => {
			let scrambled = "";
			const progress = step / steps;

			for (let i = 0; i < children.length; i++) {
				if (children[i] === " ") {
					scrambled += " ";
					continue;
				}
				if (progress * children.length > i) {
					scrambled += children[i];
				} else {
					scrambled +=
						characterSet[Math.floor(Math.random() * characterSet.length)];
				}
			}

			setScrambledText(scrambled);
			step++;

			if (step > steps) {
				clearInterval(interval);
				setScrambledText(null);
				isAnimating.current = false;
				onScrambleComplete?.();
			}
		}, speed * 1000);
	}, [duration, speed, children, characterSet, onScrambleComplete]);

	useEffect(() => {
		if (!trigger) return;
		scramble();
	}, [trigger, scramble]);

	return (
		<MotionComponent className={className} {...props}>
			{displayText}
		</MotionComponent>
	);
}
