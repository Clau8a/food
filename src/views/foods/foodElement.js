import React from 'react';
import PropTypes from 'prop-types';

const FoodElement = ({ food }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span>{food.id_food} {food.name}</span>
      </div>
      <div className="card-body">
        <p>Ingredients:</p>
      </div>
    </div>
  );
};

FoodElement.propTypes = {
  food: PropTypes.shape({
    id_food: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodElement;
