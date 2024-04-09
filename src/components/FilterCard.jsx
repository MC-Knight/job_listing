import PropTypes from "prop-types";

function FilterCard({ item, removeFilter }) {
  return (
    <div className="filter-card">
      <div className="filter-card-left">{item}</div>
      <div className="filter-card-right" onClick={() => removeFilter()}>
        X
      </div>
    </div>
  );
}

FilterCard.propTypes = {
  item: PropTypes.string.isRequired,
  removeFilter: PropTypes.func.isRequired,
};

export default FilterCard;
