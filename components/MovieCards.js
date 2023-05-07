// Import the Link component from Next.js
import Link from "next/link";

// MovieCards component receives a MovieCard object as a prop
const MovieCards = ({ MovieCard }) => {
  // Construct the poster_path using a ternary operator to handle missing poster_path values
  const poster_path = `https://image.tmdb.org/t/p/w342${
    MovieCard.poster_path ?? "/wjVuAGb.png"
  }`;

  // Return the JSX for the MovieCards component
  return (
    <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5">
      <div className="rounded-md overflow-hidden">
        {/* Use the Link component for client-side navigation */}
        {/* TODO: remove legacyBehavior */}
        <Link legacyBehavior key={MovieCard.id} href="/movie/[id]" as={`/movie/\${MovieCard.id}`}>
          {/* Create an anchor tag with the movie's title as the title attribute */}
          <a title={MovieCard.title}>
            {/* Display the movie poster image */}
            <img
              className="w-full h-auto hover:opacity-70 rounded-md"
              title={MovieCard.title}
              src={poster_path}
              alt={MovieCard?.title}
              layout="responsive"
              width={342}
              height={513}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

// Export the MovieCards component as the default export
export default MovieCards;
