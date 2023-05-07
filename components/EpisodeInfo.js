// Import necessary hooks and components
import { useState, useEffect } from "react";
import Link from "next/link";

// EpisodeInfo component that displays episode details and navigation links
const EpisodeInfo = ({ EpisodeDetail, seasonid, epid, showid }) => {
  // Destructure episode details
  const { name, air_date, overview, vote_average, vote_count } = EpisodeDetail;

  // Initialize state for episode navigation
  const [episodeNav, setEpisodeNav] = useState({ prevEp: null, nextEp: null });

  // Update episode navigation links when epid changes
  useEffect(() => {
    setEpisodeNav({
      prevEp: epid > 1 ? epid - 1 : null,
      nextEp: parseInt(epid) + 1,
    });
  }, [epid]);

  // Render the component
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
          {/* Render navigation links based on episodeNav state */}
          <div className="flex justify-center">
            {episodeNav.prevEp && (
              <Link
                legacyBehavior
                href={`/tv/${showid}/season/${seasonid}/${episodeNav.prevEp}`}
              >
                <a className="bg-gray-900 text-white px-6 py-3 rounded-md mr-4">
                  Previous Episode
                </a>
              </Link>
            )}

            {episodeNav.nextEp && (
              <Link
                legacyBehavior
                href={`/tv/${showid}/season/${seasonid}/${episodeNav.nextEp}`}
              >
                <a className="bg-gray-900 text-white px-6 py-3 rounded-md">
                  Next Episode
                </a>
              </Link>
            )}
          </div>
        </div>
        {/* Render video player */}
        <div className="w-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg aspect-video"
              src={`https://www.2embed.to/embed/tmdb/tv?id=${showid}&s=${seasonid}&e=${epid}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default EpisodeInfo;
