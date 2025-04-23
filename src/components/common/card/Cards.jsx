import PropTypes from "prop-types";
import "./cards.css";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Card = ({ icon, title, description, tags, img, link, github }) => { 
  
  return (
    <div className="card">
      {img && (
        <div className="card__image">
          <img src={img} alt={title} />
          <div className="card__image-overlay">
            {link && (
              <a href={link} target="_blank" className="card__overlay-icon">
                <FaEye />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" className="card__overlay-icon">
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      )}
      
      <div className="card__header">
        {icon && <div className="card__icon">{icon}</div>}
        <h3 className="card__title">{title}</h3>
      </div>
      
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
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
  img: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string
};

export default Card;