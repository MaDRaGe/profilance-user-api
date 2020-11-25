import * as React from 'react';
import { connect } from 'react-redux';
import { filterNews } from '../../../redux/actions/news';

interface INewsFilterProps {
  filterNews: Function
}
const NewsFilter = ({filterNews}: INewsFilterProps) => {
  const [filterValue, setFilterValue] = React.useState('');

  const onFilterChange = (event) => {
    setFilterValue(event.target.value.trim().toLowerCase());
    filterNews(event.target.value.trim().toLowerCase());
  }
  return (
    <div className="filter">
      <input 
        onChange={onFilterChange} 
        type="text"
        className="filter__input" 
        value={filterValue}
        placeholder="Enter news title..."
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterNews: (filterValue: String) => dispatch(filterNews(filterValue))
  }
}

export default connect(null, mapDispatchToProps)(NewsFilter);