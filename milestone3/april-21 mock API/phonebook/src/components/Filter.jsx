const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      filter shown with <input onChange={onFilterChange} value={filter} />
    </div>
  )
}

export default Filter;