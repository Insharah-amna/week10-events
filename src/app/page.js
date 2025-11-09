import React from "react";
import Counter from "@/components/Counter";
import Courses from "@/components/Courses";
import { CourseData } from "@/components/data";

export default function Page() {
	return (
		<div className="bg-gray-100 min-h-screen text-black pt-6 space-y-6">
			{CourseData.map((c) => {
				return (
					<Courses
						key={c.id}
						id={c.id}
						heading={c.name}
						date={c.date}
						location={c.location}
						image={c.image}
					/>
				);
			})}

			<Counter />
		</div>
	);
}
