import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const [pollingInterval, setPollingInterval] = useState(3000);

  const onSuccess = (data) => {
    if (data.length > 5) setPollingInterval(false);
    console.log(
      "Data has been successfully fetched from the server. Thanks.",
      data
    );
  };

  const onError = (error) => {
    console.log("There was an error fetching the data from the server.", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError, pollingInterval);
  useEffect(() => {}, [pollingInterval]);

  console.log(isLoading, isFetching);

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={refetch}>Fetch Heroes</button>
      {isLoading || isFetching ? (
        <div>Loading...</div>
      ) : (
        data?.data.map((hero) => (
          <h1 key={hero?.id}>
            <Link to={`/rq-super-heroes/${hero?.id}`}>{hero?.name}</Link>
          </h1>
        ))
        // data.map((heroName) => <h1 key={heroName}>{heroName}</h1>)
      )}
    </div>
  );
};
