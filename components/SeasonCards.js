// Import the Link component from Next.js
import Link from "next/link";

// Define the SeasonCards component accepting seasonCards and tvDetail as props
const SeasonCards = ({ seasonCards, tvDetail }) => {
  // Return the JSX for the component
  return (
    <div className="season-cards flex flex-row flex-wrap justify-start">
      {/* Map over seasonCards and render a card for each */}
      {seasonCards.map(({ poster_path, season_number, name }, index) => {
        // Determine the posterUrl based on whether a poster_path is provided
        const posterUrl = poster_path
          ? `https://image.tmdb.org/t/p/w342${poster_path}`
          : "https://i.imgur.com/wjVuAGb.png";

        // Return the JSX for each season card
        return (
          <div
            key={index}
            className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5"
          >
            <div className="rounded-md overflow-hidden">
              {/* Use Link component for navigation to the season's page */}
              <Link
                legacyBehavior
                href={`/tv/${tvDetail.id}/season/${season_number}`}
              >
                <a>
                  {/* Display the poster image with hover effect */}
                  <img
                    className="w-full hover:opacity-70"
                    src={posterUrl}
                    alt={name}
                  />
                  {/* Display the season name */}
                  <div className="flex text-white justify-center text-xl leading-0 font-semibold py-2">
                    {name}
                  </div>
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Export the SeasonCards component
export default SeasonCards;
