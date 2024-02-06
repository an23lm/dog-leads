import React from "react";
import ServiceItem from "./service-item";
import { display } from "../fonts";

export default function Services() {
	return (
		<div className="px-5 md:px-10 flex flex-col max-w-5xl w-full gap-12">
			<div className="gap-5">
				<p className="text-primary uppercase">Services</p>
				<h2
					className={`text-dark ${display.className} text-large-title leading-none max-w-full lg:max-w-4/5`}
				>
					Grow your business with Dog Leads&lsquo; Comprehensive Services!
				</h2>
				<p className="text-dark-secondary text-body max-w-4/5">
					Lorem ipsum dolor sit amet consectetur. Nisl maecenas urna aliquam et
					et enim. Id pellentesque a scelerisque ut nunc.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				<ServiceItem
					title="Customized Targeted Outreach"
					description="Unlock your business potential with Dog Leads' tailored outreach services."
					icon="/people.svg"
					iconAlt="icon of 3 people with stars over them"
				/>
				<ServiceItem
					title="Data-Driven Lead Scoring"
					description="Experience precision in lead generation with Dog Leads' advanced data analytics."
					icon="/magnifying-glass.svg"
					iconAlt="icon of a magnifying glass with a bar graph"
				/>
				<ServiceItem
					title="Multi-Channel Engagement Campaigns"
					description="Amplify your brand presence across platforms with Dog Leads' multi-channel engagement strategies."
					icon="/loud-speaker.svg"
					iconAlt="icon of a loud speaker"
				/>
				<ServiceItem
					title="Conversion-Optimized Landing Pages"
					description="Maximize lead conversion rates with Dog Leads' expertly designed landing pages."
					icon="/browser-window.svg"
					iconAlt="icon of a browser window"
				/>
				<ServiceItem
					title="Real-Time Lead Tracking and Reporting"
					description="Stay in control and make informed decisions with Dog Leads' real-time lead tracking and reporting services."
					icon="/papers.svg"
					iconAlt="icon of 2 overlapping papers"
				/>
				<ServiceItem
					title="AI-Powered Predictive Analytics"
					description="Harness the power of artificial intelligence with Dog Leads' predictive analytics."
					icon="/ai-bot.svg"
					iconAlt="icon of robot with an antenna and a speech bubble"
				/>
			</div>
		</div>
	);
}