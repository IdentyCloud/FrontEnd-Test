import { useParams } from "react-router-dom";
import dayjs from "dayjs";

export const ElementArticle = ({ data }) => {
  let params = useParams();

  return (
    <div className="uk-container uk-container-large">
      {Object.values(data)
        .filter((item) => item.id === params.id)
        .map(
          ({
            id,
            title,
            createdAt,
            views,
            category,
            thumbnailUrl,
            subtitle,
            body,
          }) => (
            <div key={id} className="uk-animation-fade">
              <div className="uk-margin uk-margin-remove-adjacent">
                <h2 className="uk-text-large uk-text-bold uk-text-capitalize">
                  {title}
                </h2>
              </div>
              <div className="uk-flex uk-flex-middle uk-flex-around uk-text-capitalize">
                <div>
                  <span uk-icon="calendar"></span>{" "}
                  {dayjs(createdAt).format("YYYY/MM/DD")}
                </div>
                <div>
                  <span uk-icon="history"></span> {views}
                </div>
                <div>
                  <span uk-icon="rss"></span> {category}
                </div>
              </div>
              <div className="uk-padding-small">
                <img
                  src={thumbnailUrl}
                  alt={category}
                  width={"60%"}
                  className="uk-align-center"
                />
                <article className="uk-article">
                  <p className="uk-text-lead">{subtitle}</p>
                  <p>{body}</p>
                </article>
              </div>
            </div>
          )
        )}
    </div>
  );
};
