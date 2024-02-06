import Image from "next/image";
import React from "react";
import { display } from "../fonts";

export default function TitleCard() {
	return (
		<div className="px-5 md:px-10 flex flex-col items-center max-w-5xl gap-5">
			<h1
				className={`text-extra-large-title leading-none text-center ${display.className} text-dark uppercase`}
			>
				<span className="text-primary">Lead Generation</span>
				<br />
				Services to help your business grow!
			</h1>
			<p className="text-dark-secondary text-body text-center max-w-md">
				Lorem ipsum dolor sit amet consectetur. Lectus odio et montes
				condimentum. Sit nulla pharetra odio diam etiam enim aliquam. Ultricies
				urna diam porttitor mattis orci tortor ac in orci. Vitae ipsum convallis
				pulvinar rhoncus urna.
			</p>
			<a className="mx-auto px-12 py-3 bg-primary text-light rounded-full">
				Get Started
				<Image
					className="inline-block ml-2"
					src="/hero-enter-icon.svg"
					alt="Enter Symbol"
					width={15}
					height={15}
				/>
			</a>
		</div>
	);
}
