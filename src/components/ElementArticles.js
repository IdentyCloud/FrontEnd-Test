import { useNavigate } from "react-router-dom";
import dayjs from "dayjs"; // Manejador de Fechas y Formatos

export const ElementArticles = ({ data, title, filter }) => {
  let navigate = useNavigate();

  // Navegación por Evento
  const hanbleArticle = (e) => {
    navigate(`${e.target.id}`);
  };

  // Diseño y Estructura de Tarjetas por Articulos
  return (
    <div className="uk-container uk-container-large">
      <div className="uk-margin uk-margin-remove-adjacent">
        <h2 className="uk-text-large uk-text-bold uk-text-capitalize">
          {title}
        </h2>
      </div>

      <div
        className="uk-grid-match uk-child-width-1-3@m uk-flex-left uk-text-left"
        uk-grid="true"
      >
        {Object.values(data)
          .sort((a, b) =>
            filter === "views"
              ? a.views > b.views
                ? -1
                : b.views > a.views
                ? 1
                : 0
              : a.createdAt > b.createdAt
              ? -1
              : b.createdAt > a.createdAt
              ? 1
              : 0
          )
          .map(({ id, thumbnailUrl, category, title, views, createdAt }) => (
            <div key={id}>
              <div className="uk-card uk-card-default uk-animation-fade">
                <div className="uk-card-media-top">
                  <img
                    className="uk-object-contain"
                    src={thumbnailUrl}
                    alt={category}
                    style={{ aspectRatio: "1 / 1", width: "100%" }}
                  />
                </div>
                <div className="uk-card-body">
                  <h6 className="uk-card-large uk-text-capitalize uk-margin-bottom-small">
                    {title}
                  </h6>
                  <div className="uk-flex uk-flex-middle uk-flex-between">
                    <div>
                      <span uk-icon="rss"></span> {category}
                    </div>
                    <div>
                      <span uk-icon="history"></span> {views}
                    </div>
                  </div>
                </div>
                <div className="uk-card-footer">
                  <div className="uk-flex uk-flex-middle uk-flex-between">
                    <div>
                      <span uk-icon="calendar"></span>{" "}
                      {dayjs(createdAt).format("YYYY/MM/DD")}
                    </div>
                    <div>
                      <button
                        className="uk-button uk-button-primary uk-button-small uk-text-capitalize"
                        onClick={hanbleArticle}
                        id={id}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
