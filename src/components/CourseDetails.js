import Link from "next/link";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import { MdCalendarToday, MdLocationOn } from "react-icons/md";
import { CourseData } from "./data";

const CourseDetails = ({ id }) => {
	const data = CourseData.find((i) => i.id == id);

	return (
		<div className="bg-neutral-200 min-h-screen flex flex-col gap-4">
			<div className="flex justify-center items-center h-[160px] px-7 bg-gradient-to-r from-teal-500 to-sky-300 relative">
				<div className="absolute left-4 sm:left-10">
					<button className="p-2 rounded-lg cursor-pointer hover:bg-gray-300/40">
						<Link href={"/"}>
							<IoArrowBack size={30} />
						</Link>
					</button>
				</div>

				<h1 className="text-[26px] sm:text-4xl text-white -mt-8">
					{data.name}
				</h1>

				<div className="absolute top-30 w-[75%] sm:w-[45%] flex flex-col gap-10">
					<div className="bg-gray-700 flex gap-5 sm:gap-10 items-center justify-center p-8 rounded-md">
						<Image
							src={data.image}
							alt="course"
							className="rounded-full w-25 sm:w-35 lg:w-45 h-25 sm:h-35 lg:h-45 border-2 border-white"
							height={200}
							width={200}
						/>

						<div className="flex flex-col gap-3 text-teal-300 text-sm sm:text-[16px]">
							<p className="flex flex-col gap-2">
								<MdCalendarToday />
								{data.date}
							</p>

							<p className="flex flex-col gap-2">
								<MdLocationOn size={18} />
								{data.location}
							</p>
						</div>
					</div>

					<div className="text-center text-black">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Praesentium, officiis itaque omnis ullam, mollitia in velit optio
						quam doloremque vero magnam rem, laborum eum. Eaque, sequi tempore!
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;
