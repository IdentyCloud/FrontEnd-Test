export const Error = ({ msg }) => {
  return (
    <div>
      <div className="uk-alert-danger uk-text-center" uk-alert="true">
        <p>{`An error has occurred: ${msg}`}</p>
      </div>
    </div>
  );
};
