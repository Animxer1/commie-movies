// Import the Link component from the Next.js library
import Link from "next/link";

// Define the MovieCards functional component that takes a prop named MovieCard
const MovieCards = ({ MovieCard }) => {
  // Construct the poster_path by combining the base URL and the poster_path from the MovieCard object
  // If the poster_path is not available, use a default image
  const poster_path = `https://image.tmdb.org/t/p/w342${
    MovieCard.poster_path ?? "/wjVuAGb.png"
  }`;

  // Return the JSX for the MovieCards component
  return (
    // Define the container div with appropriate responsive classes for different screen sizes
    <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5">
      // Define a rounded div for the movie poster
      <div className="rounded-md overflow-hidden">
        // Use the Next.js Link component to navigate to the movie's detail page
        <Link legacyBehavior href={`/movie/\${MovieCard.id}`}>
          // Add an anchor tag with the movie title as the title attribute
          <a title={MovieCard.title}>
            // Add the movie poster image with hover effect and responsive sizing
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
