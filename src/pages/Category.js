import { useQuery } from "react-query";

import { GET_BASE_URL } from "../utils";
import axios from "axios";

export const Category = () => {

  const { isLoading, error, data } = useQuery("categories", () =>
    axios.get(GET_BASE_URL).then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const filterObjects = [
    ...new Map(
      Object.values(data).map((item) => [item.category, item])
    ).values(),
  ];

  return (
    <div className="uk-container uk-container-large">
      <div className="uk-margin uk-margin-remove-adjacent">
        <h2 className="uk-text-large uk-text-bold uk-text-capitalize">
          categories to show
        </h2>
      </div>

      <div
        className="uk-grid-match uk-child-width-1-3@m uk-flex-left uk-text-left"
        uk-grid="true"
      >
        {filterObjects.map((data) => (
          <div key={data.id}>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img className="uk-object-contain" src={data.thumbnailUrl} alt={data.category} style={{aspectRatio: '1 / 1', width: '100%'}} />
              </div>
              <div className="uk-card-body">
                <h6 className="uk-card-large uk-text-capitalize">
                  {data.category}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
