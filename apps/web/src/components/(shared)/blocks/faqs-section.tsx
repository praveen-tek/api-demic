import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		q: "How is apidemic different from Postman or Insomnia?",
		a: "Those tools require you to write and maintain test cases manually. apidemic drives testing autonomously the agent decides what to test, generates the payloads, and interprets the results without your input.",
	},
	{
		q: "What API types does apidemic support?",
		a: "Currently focused on REST APIs. GraphQL and gRPC support is on the roadmap once the core agentic loop stabilizes.",
	},
	{
		q: "Can I integrate apidemic into my CI/CD pipeline?",
		a: "Pipeline integration is planned for v0.2. The output format is designed with CI consumption in mind from day one.",
	},
	{
		q: "Do I need to provide an OpenAPI spec?",
		a: "No. apidemic can operate without a spec by exploring the API surface dynamically. A spec improves coverage depth but is not required.",
	},
	{
		q: "Is apidemic open source?",
		a: "Yes, licensed under AGPLv3. Contributions are welcome once the core loop ships.",
	},
];

export default function FaqSection() {
	return (
		<div className="px-10 py-10 border-b border-border">
			<span className="font-eightgon text-[10px] tracking-[0.2em] uppercase text-(--muted-dark) block mb-8">
				FAQ
			</span>
			<Accordion className="w-full">
				{faqs.map((item, i) => (
					<AccordionItem
						key={i}
						value={`faq-${i}`}
						className="border-b border-border last:border-b-0"
					>
						<AccordionTrigger className="font-eightgon text-[12px] tracking-wider text-white hover:text-blue-500 hover:no-underline py-5 text-left">
							{item.q}
						</AccordionTrigger>
						<AccordionContent className="font-eightgon text-[12px] leading-[1.75] text-blue-200 pb-5">
							{item.a}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
