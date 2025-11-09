import React from "react";
import CourseDetails from "@/components/CourseDetails";

async function Details({ params }) {
	params = await params;

	return <CourseDetails id={params.id} />;
}

export default Details;
