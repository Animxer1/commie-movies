// Import the Link component from Next.js
import Link from "next/link";

// Create the SeasonInfo component that receives SeasonDetail and tvID as props
const SeasonInfo = ({ SeasonDetail, tvID }) => {
  // Destructure episodes, season_number, and overview properties from SeasonDetail
  const { episodes, season_number, overview } = SeasonDetail;
  // Return the JSX structure for the SeasonInfo component
  return (
    <div className="text-center min-h-screen season-details md:mx-24">
      <div className="container mx-auto px-4 py-11 flex flex-col md:flex-row season-container place-content-center">
        <div>
          {/* Display the season number as a heading */}
          <h2 className="text-4xl mt-4 md:mt-0 font-semibold text-white">
            Season {season_number}
          </h2>
          {/* Display the season overview */}
          <p className="text-white mt-8">{overview}</p>
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-center h-full">
        {/* Map through the episodes array and render each episode */}
        {episodes.map(({ still_path, name }, index) => {
          const episodeNumber = index + 1;
          const imageUrl = still_path
            ? `https://image.tmdb.org/t/p/w342${still_path}`
            : "https://i.imgur.com/HIYYPtZ.png";

          // Return the JSX structure for each episode
          return (
            <div key={episodeNumber} className="px-1 py-1 overflow-hidden">
              {/* Use the Link component to navigate to the episode details page */}
              <Link
                legacyBehavior
                href={`/tv/${tvID}/season/${season_number}/${episodeNumber}`}
              >
                <a>
                  {/* Display the episode image */}
                  <img
                    className="w-72 rounded-sm hover:opacity-70"
                    src={imageUrl}
                    alt={name}
                  />
                  {/* Display the episode number and name */}
                  <p className="bg-zinc-800 max-w-[18rem] rounded-sm break-words text-white text-sm leading-0 font-semibold py-2">
                    {season_number} x {episodeNumber} : {name}
                  </p>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Export the SeasonInfo component
export default SeasonInfo;
