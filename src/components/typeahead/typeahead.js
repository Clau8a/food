import React from 'react';
import PropTypes from 'prop-types';
import useDebounce from '../hooks/useDebounce';
import { fetchData, CreateAuthRequest } from '../../api/constants';
import './typeahead.scss';

const TypeaheadWithOptions = ({
  url,
  limit,
  idLabel,
  labelKey,
  onSelect,
  className,
  inputProps,
  placeholder,
  renderOptions,
}) => {
  const [search, setSearch] = React.useState('');
  const [results, setResults] = React.useState({ count: 0, rows: [] });
  const [selected, setSelected] = React.useState(null);
  const debounce = useDebounce(search, 300);

  const getData = React.useCallback(() => {
    setSelected(null);
    const request = { method: 'GET' };
    fetchData(`${url}?limit=${limit}&search=${debounce}`, request)
      .then(response => {
        setResults({ count: 3, rows: response });
      });
  }, [url, limit, debounce]);

  React.useEffect(() => {
    if (selected) {
      if (typeof labelKey === 'function') {
        if (labelKey(selected) !== debounce) {
          getData();
        }
      } else if (selected[labelKey] !== debounce) {
        getData();
      }
    } else {
      getData();
    }
  }, [getData]);

  // React.useEffect(() => {
  //   if (inputProps) {
  //     if (inputProps.hasOwnProperty('disabled')) {
  //       if (inputProps.disabled) {
  //         setSearch('');
  //         setSelected(null);
  //         setResults({ count: 0, rows: [] });
  //       }
  //     }
  //   }
  // }, [inputProps]);

  const handleOnChange = ({ target }) => {
    setSearch(target.value);
    if (selected) {
      // clean selected item and return null
      setSelected(null);
      onSelect(null);
    }
  };

  const onSelectItem = (result) => {
    setSelected(result);
    onSelect(result);
    if (typeof labelKey === 'function') {
      setSearch(labelKey(result));
    } else {
      setSearch(result[labelKey]);
    }
    setResults({ count: 0, rows: [] });
  };

  return (
    <div className={`typeahead-cuztom ${className}`}>
      <input
        className="form-control input-shadow"
        placeholder={placeholder}
        value={search}
        onChange={handleOnChange}
        {...inputProps}
      // onKeyPress={(e) => handlePressEnterKey(e.key)}
      />
      <div className="typeahead-cuztom-results">
        {
          results.rows.map(result => (
            <div
              key={result[idLabel]}
              className="typeahead-cuztom-result"
              onClick={() => onSelectItem(result)}
            >
              {renderOptions
                ? renderOptions(result)
                : result[labelKey]}
            </div>
          ))
        }
      </div>
    </div>
  );
};

TypeaheadWithOptions.propTypes = {
  url: PropTypes.string.isRequired,
  labelKey: PropTypes.string.isRequired,
  idLabel: PropTypes.string.isRequired,
  limit: PropTypes.number,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  inputProps: PropTypes.object,
  placeholder: PropTypes.string,
  renderOptions: PropTypes.func,
};

TypeaheadWithOptions.defaultProps = {
  limit: 5,
  className: '',
  inputProps: {},
  renderOptions: null,
  placeholder: 'Type to search ...',
  onSelect: f => f,
};

export default TypeaheadWithOptions;
