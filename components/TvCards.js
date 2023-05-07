// Import Link from Next.js
import Link from "next/link";

// Create a functional TvCards component that takes a TvCard object as a prop
const TvCards = ({ TvCard }) => {
  // Get the poster path using the TvCard's poster_path property or a fallback image if it's not available
  const posterPath = `https://image.tmdb.org/t/p/w342${
    TvCard.poster_path ?? "/wjVuAGb.png"
  }`;

  // Render the TvCards component
  return (
    <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5">
      <div className="rounded-md overflow-hidden">
        {/* Use Next.js Link to navigate to the TvCard's detail page */}
        <Link legacyBehavior href={`/tv/${TvCard.id}`} key={TvCard.id}>
          <a title={TvCard.title}>
            {/* Display the TvCard poster image with hover effect and accessibility attributes */}
            <img
              className="w-11/12 hover:opacity-70 rounded-md"
              title={TvCard.title}
              src={posterPath}
              alt={TvCard.title}
              width="1500px"
              height="2250px"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

// Export the TvCards component as the default export
export default TvCards;
