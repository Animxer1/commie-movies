// Import required components and hooks
import SeasonCards from "./SeasonCards";
import { useMemo } from "react";

// TvInfo component takes tvDetail and genreArr as props
const TvInfo = ({ tvDetail, genreArr }) => {
  // useMemo to cache the seasons data
  const seasons = useMemo(() => tvDetail?.seasons ?? [], [tvDetail]);

  // Function to render rating and other related information
  const renderRating = () => (
    <div className="flex flex-wrap items-center text-white text-sm my-4">
      {/* Render the star SVG icon */}
      <svg className="fill-current text-orange-500 w-4" viewBox="0 0 24 24">
        <path
          d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
          data-name="star"
        />
      </svg>
      {/* Render the vote average, first air date, episode run time, and genres */}
      <span className="ml-1">{tvDetail.vote_average}</span>
      <span className="mx-2">|</span>
      <span>{tvDetail.first_air_date}</span>
      <span className="mx-2">|</span>
      <span>{`\${tvDetail.episode_run_time[0]} minutes.`}</span>
      <span className="mx-2">|</span>
      <span>{genreArr.join(" , ")}</span>
    </div>
  );

  // Render the main TvInfo component
  return (
    <div className="tv-details md:pr-24">
      <div className="container mx-auto px-4 py-11 flex flex-col md:flex-row movie-container">
        <div className="md:ml-24">
          {/* Render the TV show name */}
          <h2 className="text-4xl mt-4 md:mt-0 font-semibold text-white">
            {tvDetail.name}
          </h2>
          {/*  Render the rating information */}
          {renderRating()}
          {/* Render the overview text */}
          <p className="text-white mt-8">{tvDetail.overview}</p>
          {/* Render the SeasonCards component */}
          <div className="mt-12">
            <SeasonCards
              key={tvDetail.id}
              seasonCards={seasons}
              tvDetail={tvDetail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the TvInfo component
export default TvInfo;
