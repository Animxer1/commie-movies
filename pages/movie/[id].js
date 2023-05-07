// Import required hooks and components
import { useState } from "react";
import Shell from "../../components/Shell";
import MovieRecommendations from "../../components/MovieRecommendations";
import MovieInfo from "../../components/MovieInfo";
import Head from "next/head";
import Comments from "../../components/Comments";

// Fetch movie details from the API and return as props for the component
export async function getServerSideProps({ query }) {
  const { id } = query;
  const apiKey = process.env.API_KEY;

  // Fetch movie data using the provided movie ID and API key
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );
  const data = await res.json();
  const genreArr = data.genres.map((element) => element.name);

  // Return movie data as props if the response is successful
  if (res.ok) {
    return {
      props: {
        movieDetail: data,
        genreArr,
        id,
      },
    };
  }
}

// MovieDetail component to display movie information, recommendations, and comments
export default function MovieDetail({ movieDetail, genreArr, id }) {
  const [comments, setComments] = useState([]);

  return (
    <>
      {/* Set the head metadata for SEO and sharing */}
      <Head>
        <title>
          {movieDetail.title} ({movieDetail.release_date.substr(0, 4)}) -
          commiemovies.ml
        </title>
        <meta
          property="og:image"
          content={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
        />
        <meta property="og:title" content={movieDetail.title} />
        <meta property="description" content={movieDetail.overview} />
      </Head>

      {/* Render movie information, recommendations, and comments within a Shell component */}
      <div className="popular-movies bg-zinc-900">
        <Shell>
          <MovieInfo MovieDetail={movieDetail} genreArr={genreArr} id={id} />
          <MovieRecommendations id={movieDetail.id} />
          <Comments />
        </Shell>
      </div>
    </>
  );
}
