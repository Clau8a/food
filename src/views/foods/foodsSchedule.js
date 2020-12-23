import React from 'react';
import dayjs from "dayjs";
import FoodElement from './foodElement';
import { Link } from 'react-router-dom';

const today = dayjs();

const foods = [{ id_food: 1, name: 'Quesadilla' }];

const FoodsSchedule = () => {

  const [day, setDay] = React.useState(today);

  const CalculateNewDate = (num) => {
    setDay(day.add(num, 'day'));
  };

  const goToToday = () => {
    setDay(today);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="handlers">
          <div className="row">
            <div className="col-1">
              <button className="btn btn-light" onClick={() => CalculateNewDate(-1)}>
                <i className="fas fa-arrow-left" />
              </button>
            </div>
            <div className="col-10 tac">
              <button className="btn btn-light" onClick={goToToday}>Today</button>
              <span>{day.format("MMM, DD YYYY")}</span>
            </div>
            <div className="col-1">
              <button className="btn btn-light" onClick={() => CalculateNewDate(1)}>
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        {foods.map(food => (<FoodElement key={food.id_food} food={food} />))}
      </div>
      <Link to={{ pathname: "/schedule/food", date: day }} className="btn btn-primary">Schedule food</Link>
    </div>
  );
};

export default FoodsSchedule;