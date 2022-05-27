import { useDispatch, useSelector } from 'react-redux';
import { handlePositionValue, submitPositionValue } from '../../actions/position';
import './styles.scss';

const SearchCity = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.position.citySearch);

  return (
    <div className="search">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(submitPositionValue());
        }}
      >
        <input
          type="text"
          className="search-form--input"
          placeholder="search city..."
          value={city}
          onChange={(e) => {
            dispatch(handlePositionValue(e.target.value));
          }}
        />
      </form>
    </div>
  );
};

export default SearchCity;
