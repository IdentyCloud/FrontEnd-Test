import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import dayjs from "dayjs";
import { GET_BASE_URL } from "../utils";

export const Article = () => {
  let params = useParams();

  const { isLoading, error, data } = useQuery("categories", () =>
    axios.get(GET_BASE_URL).then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="uk-container uk-container-large">
        {Object.values(data)
          .filter((item) => item.id === params.id)
          .map(
            (data) => (
              <div key={data.id}>
                <div className="uk-margin uk-margin-remove-adjacent">
                  <h2 className="uk-text-large uk-text-bold uk-text-capitalize">
                    {data.title}
                  </h2>
                </div>
                <div className="uk-flex uk-flex-middle uk-flex-around uk-text-capitalize">
                  <div>
                    <span uk-icon="rss"></span>{" "}
                    {dayjs(data.createdAt).format("YYYY/MM/DD")}
                  </div>
                  <div>
                    <span uk-icon="history"></span> {data.views}
                  </div>
                  <div>
                    <span uk-icon="history"></span> {data.category}
                  </div>
                </div>
                <div className="uk-padding-small">
                  <img
                    src={data.thumbnailUrl}
                    alt={data.category}
                    width={"60%"}
                    className="uk-align-center"
                  />
                  <article className="uk-article">
                    <p className="uk-text-lead">{data.subtitle}</p>
                    <p>{data.body}</p>
                  </article>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
};
