export const ElementCategory = ({ data }) => {
  // Filtro de Objeto por Categoria
  const filterObjects = [
    ...new Map(
      Object.values(data).map((item) => [item.category, item])
    ).values(),
  ];

  // Diseño y estructura de tarjetas por Categoria
  return (
    <div className="uk-container uk-container-large">
      <div className="uk-margin uk-margin-remove-adjacent uk-animation-fade">
        <h2 className="uk-text-large uk-text-bold uk-text-capitalize">
          categories to show
        </h2>
      </div>

      <div
        className="uk-grid-match uk-child-width-1-3@m uk-flex-left uk-text-left"
        uk-grid="true"
      >
        {filterObjects.map(({ id, thumbnailUrl, category }) => (
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
                <h6 className="uk-card-large uk-text-capitalize">{category}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
