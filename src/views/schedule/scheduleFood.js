import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Typeahead from '../../components/typeahead/typeahead';
import { useLocation } from 'react-router-dom';

const ScheduleFood = () => {
  const location = useLocation();
  const date = location.date;
  const [form, setForm] = React.useState({ date });
  console.log(dayjs(date).format("DD/MMM/YYYY"), form);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Choose food</label>
              <Typeahead
                url='http://localhost:8000/api/foods'
                idLabel='id_food'
                labelKey='name'
                onSelect={(xd) => { console.log(xd) }}
              />
            </div>
            <div className="form-group">
              <label>Choose date</label>
              <input type="date" />
            </div>
          </form>
        </div>
      </div>

    </div>
  );

};

// ScheduleFood.propTypes = {
//   date: PropTypes.instanceOf(dayjs).isRequired,
// };

export default ScheduleFood;