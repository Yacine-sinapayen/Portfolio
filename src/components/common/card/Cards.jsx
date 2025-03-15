import PropTypes from "prop-types";

const Card = ({ icon, title, description, tags }) => {
  return (
    <div className="card">
      <div className="card__icon">{icon}</div>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      {tags && (
        <div className="card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="card__tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default Card;