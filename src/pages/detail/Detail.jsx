import React from "react";
import { useParams } from "react-router-dom";

import "./style.scss";

import useFetch from "../../hooks/useFetch";

import DetailBanner from "./detailBanner/DetailBanner";
import Casts from "./casts/Casts";
import VideosSection from "./videosSection/VideosSection";
import SimilarMovies from "./similarMovies/SimilarMovies";
import Recommendations from "./recommendations/Recommendations";

function Detail() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Casts data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data?.results} loading={loading} />
      <SimilarMovies mediaType={mediaType} id={id} />
      <Recommendations mediaType={mediaType} id={id} />
    </div>
  );
}

export default Detail;
