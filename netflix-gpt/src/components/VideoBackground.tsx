import { useState } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";

interface VideobackgroundProps {
  movieId: number
}

const VideoContainer = ({ movieId }: VideobackgroundProps) => {
  const [trailerId, setTrailerId] = useState<string | null>(null);

  useMovieTrailer({ movieId, setTrailerId })

  return (
    <div>
      <iframe 
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerId+ "?autoplay=1&mute=1"} 
        title="YouTube video player"
        allow="autoplay">
      </iframe>
    </div>
  )
}

export default VideoContainer;