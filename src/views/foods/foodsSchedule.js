import React from 'react';
import dayjs from "dayjs";

const today = dayjs();

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
    </div>
  );
};

export default FoodsSchedule;