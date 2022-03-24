import { useQuery } from "react-query";
import axios from "axios";
import { Spinner } from "../components/Spinner";
import { Error } from "../components/Error";
import { ElementArticle } from "../components/ElementArticle";
import { GET_BASE_URL } from "../utils";

export const Article = () => {
  const { status, error, data } = useQuery("categories", () =>
    axios.get(GET_BASE_URL).then((res) => res.data)
  );

  return (
    <>
      {status === "loading" ? (
        <Spinner />
      ) : status === "error" ? (
        <Error msg={error.message} />
      ) : (
        <ElementArticle data={data} />
      )}
    </>
  );
};
