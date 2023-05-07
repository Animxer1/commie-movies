// Import required components and libraries
import Shell from "../../../../../components/Shell";
//import Footer from '../../../../../components/Footer'
import SeasonInfo from "../../../../../components/SeasonInfo";
import Head from "next/head";

// Define getServerSideProps function to fetch data from external API
export async function getServerSideProps({ query }) {
  // Destructure id and seasonid from query
  const { id, seasonid } = query;

  // Get API key from environment variables
  const apiKey = process.env.API_KEY;

  // Fetch season data from the API
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${seasonid}?api_key=${apiKey}&language=en-US`
  );

  // Parse JSON response from the API
  const data = await res.json();

  // Check if the response is successful and return the data as props
  if (res.ok) {
    return {
      props: { SeasonDetail: data, id },
    };
  }
}

// Define SeasonDetail component to display season information
export default function SeasonDetail({ SeasonDetail, id }) {
  return (
    <div className="popular-movies bg-zinc-900">
      {/* Set head metadata */}
      <Head>
        <title>
          Season {SeasonDetail.season_number} (
          {SeasonDetail.air_date.substr(0, 4)}) - commiemovies.ml
        </title>
        <meta
          property="og:image"
          content={
            "https://image.tmdb.org/t/p/original/" + SeasonDetail.poster_path
          }
        ></meta>
        <meta property="og:title" content={SeasonDetail.title}></meta>
        <meta property="description" content={SeasonDetail.overview} />
      </Head>

      {/* Render Shell and SeasonInfo components */}
      <Shell>
        <SeasonInfo SeasonDetail={SeasonDetail} tvID={id} />
      </Shell>
    </div>
  );
}
