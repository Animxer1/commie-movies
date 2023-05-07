// Import required components
import Shell from "../../components/Shell";
import TvInfo from "../../components/TvInfo";
import Head from "next/head";

// Fetch TV show details on the server-side using the provided ID
export async function getServerSideProps({ query: { id } }) {
  // Get API key from environment variables
  const apiKey = process.env.API_KEY;

  // Fetch TV show details from the API
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`
  );

  // If the response is not okay, return a notFound error
  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  // Parse the response JSON data
  const data = await response.json();
  // Extract the genre names from the data
  const genreArr = data.genres.map((genre) => genre.name);

  // Return the TV show details and genre array as props
  return {
    props: {
      tvDetail: data,
      genreArr,
    },
  };
}

// Render the TV show details page
export default function TvDetail({ tvDetail, genreArr }) {
  // Generate the title for the page
  const title = `${tvDetail.name} (${tvDetail.first_air_date.substr(
    0,
    4
  )}) - commiemovies.ml`;

  // Render the page with the appropriate head, shell, and background
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="popular-tv bg-zinc-900">
        <Shell>
          <TvInfo tvDetail={tvDetail} genreArr={genreArr} />
        </Shell>
      </div>
    </>
  );
}
