import Link from "next/link";
import Image from "next/image";

const Courses = ({ heading, location, image, date, id }) => {
	return (
		<div>
			<div className="flex items-center gap-3 bg-gray-200 rounded-lg m-auto w-[80%] shadow-sm">
				<div className="w-[35%] flex items-center">
					<Image
						src={image}
						alt="course image"
						className="rounded-l-lg"
						height={200}
						width={330}
					/>
				</div>

				<div className="w-[65%] space-y-1 pr-3 sm:pr-8 py-5">
					<h2 className="text-lg sm:text-2xl">{heading}</h2>

					<h5 className="text-xs sm:text-[16px]">{date}</h5>

					<p className="text-xs sm:text-sm text-gray-600">{location}</p>

					<div className="flex items-end justify-end">
						<Link href={`details/${id}`}>
							<button className="p-1 md:px-3 md:py-2 text-xs md:text-[16px] text-gray-800 bg-green-400 rounded-sm cursor-pointer">
								Explore
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Courses;
