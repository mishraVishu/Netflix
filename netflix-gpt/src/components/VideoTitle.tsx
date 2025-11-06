import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

interface VideoTitleProps {
    title:string,
    overview : string
}

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-[5%] text-white bg-gradient-to-r from-black absolute">
        <h1 className="text-9xl font-serif text-white mb-2">{title}</h1>
        <h2 className="w-1/2 mb-2 text-lg text-white tracking-wider">{overview}</h2>
        <div className="flex gap-2">
            <button className="bg-white rounded-lg text-black px-10 py-3 flex gap-2 text-2xl"><FaPlay className="text-black size-5 mt-1"/> Play</button>
            <button className="bg-gray-500 opacity-[0.7] rounded-lg text-white px-10 py-3 flex gap-2 text-2xl"><FaInfoCircle className="text-white size-5 mt-1"/>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle