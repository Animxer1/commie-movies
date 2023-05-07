import Shell from "../../../../../components/Shell";
//import Footer from '../../../../../components/Footer'
import EpisodeInfo from "../../../../../components/EpisodeInfo";
import React from "react";
import Comments from "../../../../../components/Comments";
import Head from "next/head";

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const { id, seasonid, epid } = query;
  const apiKey = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${seasonid}/episode/${epid}?api_key=${apiKey}&language=en-US`
  );
  const data = await res.json();
  if (res.ok) {
    return {
      props: { EpisodeDetail: data, id, seasonid, epid },
    };
  }
}

export default function EpId({ EpisodeDetail, seasonid, epid, id }) {
  return (
    <div className="ep-id bg-zinc-900">
      <Head>
        <meta
          property="og:image"
          content={
            "https://image.tmdb.org/t/p/original/" + EpisodeDetail.poster_path
          }
        ></meta>
        <meta property="og:title" content={EpisodeDetail.title}></meta>
        <meta property="description" content={EpisodeDetail.overview} />
      </Head>

      <Shell>
        <EpisodeInfo
          EpisodeDetail={EpisodeDetail}
          seasonid={seasonid}
          epid={epid}
          showid={id}
        />
        <Comments />
      </Shell>
    </div>
  );
}