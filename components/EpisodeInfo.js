// Import the required hooks and components
import { useState, useEffect } from "react";
import Link from "next/link";

// Define the EpisodeInfo component
const EpisodeInfo = ({ EpisodeDetail, seasonid, epid, showid }) => {
  // Destructure the EpisodeDetail object
  const { name, air_date, overview, vote_average, vote_count } = EpisodeDetail;

  // Initialize the state for episode navigation
  const [episodeNav, setEpisodeNav] = useState({ prevEp: null, nextEp: null });

  // Update the episode navigation state when the epid prop changes
  useEffect(() => {
    setEpisodeNav({
      prevEp: epid > 1 ? epid - 1 : null,
      nextEp: parseInt(epid) + 1,
    });
  }, [epid]);

  // Define a function to render navigation links
  const renderNavLink = (linkText, linkHref) => (
    <Link legacyBehavior href={linkHref}>
      <a className="bg-gray-900 text-white px-6 py-3 rounded-md mr-4">{linkText}</a>
    </Link>
  );

  // Render the EpisodeInfo component
  return (
    <div className="episode-details container mx-auto px-4 py-11 md:mx-24">
      <div className="flex flex-col md:flex-row episode-container justify-center items-center">
        <div className="w-full md:w-1/2 md:mr-10">
          <h2 className="text-4xl font-semibold text-white mb-4">
            {seasonid} x {epid} : {name}
          </h2>
          <div className="text-white text-sm mb-4">{air_date}</div>
          <p className="text-white text-lg leading-7 mb-8">{overview}</p>
          <div className="flex items-center text-white text-sm mb-4">
            <span>{vote_average}</span>
            <span className="mx-2">|</span>
            <span>{vote_count} votes</span>
          </div>
          <div className="flex justify-center">
            {/* Render the previous episode link if available */}
            {episodeNav.prevEp &&
              renderNavLink("Previous Episode", `/tv/${showid}/season/${seasonid}/${episodeNav.prevEp}`)}

            {/* Render the next episode link if available */}
            {episodeNav.nextEp &&
              renderNavLink("Next Episode", `/tv/${showid}/season/${seasonid}/${episodeNav.nextEp}`)}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg aspect-video"
              src={`https://autoembed.to/tv/tmdb/${showid}-${seasonid}-${epid}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the EpisodeInfo component
export default EpisodeInfo;
