import { GemSmoke } from "@paper-design/shaders-react";

export default function GemSmokeWidget() {
	return (
		<GemSmoke
			speed={1}
			size={1}
			outerDistortion={1}
			innerDistortion={1}
			outerGlow={0.25}
			innerGlow={1}
			offset={0}
			scale={1}
			angle={0}
			shape="diamond"
			image="https://app.paper.design/file-assets/01KMPXZ2VCHSZ1MCYD2QF1V2V7/01KVESVFQ8H6S8X0T3VMEVB3E8.webp"
			frame={67090.28399999875}
			colorInner="#00000000"
			colors={["#2FB64C", "#CDFF61", "#FFFFFF"]}
			colorBack="#00000000"
			style={{ width: "100%", height: "100%" }}
		/>
	);
}
