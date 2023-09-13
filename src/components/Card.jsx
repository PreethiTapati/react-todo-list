import PropTypes from 'prop-types'
import  './Card.css'

const Card = ({children}) => {
  return (
    <div className="Card">{children}</div> 
  );
};
  Card.propTypes ={
    children:PropTypes.node.isRequired
  };

export default Card;