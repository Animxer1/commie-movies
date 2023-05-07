import { useState } from "react";
import Shell from "../../components/Shell";
import MovieRecommendations from "../../components/MovieRecommendations";
import MovieInfo from "../../components/MovieInfo";
import Head from "next/head";
import Comments from "../../components/Comments";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const apiKey = process.env.API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );
  const data = await res.json();
  const genreArr = data.genres.map((element) => element.name);

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

export default function MovieDetail({ movieDetail, genreArr, id }) {
  const [comments, setComments] = useState([]);

  return (
    <>
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
