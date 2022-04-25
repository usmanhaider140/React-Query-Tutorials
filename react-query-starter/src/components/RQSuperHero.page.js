import React from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";
const RQSuperHero = () => {
  const params = useParams();
  const { data, isLoading } = useSuperHeroData(params.heroId);
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <h1>{data?.data?.name}</h1>
          <h2>{data?.data?.alterEgo}</h2>
        </div>
      )}
    </div>
  );
};

export default RQSuperHero;
