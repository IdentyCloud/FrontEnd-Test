// Componete de Error generico
export const Error = ({ msg }) => {
  return (
    <div>
      <div className="uk-alert-danger uk-text-center" uk-alert="true">
        <h3>{`An error has occurred: ${msg}`}</h3>
      </div>
    </div>
  );
};
