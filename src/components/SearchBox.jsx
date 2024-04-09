import { useContext } from "react";
import FilterCard from "./FilterCard";
import { HomeContext } from "../hooks/context";

function SearchBox() {
  const { filters } = useContext(HomeContext);
  const { removeFilter } = useContext(HomeContext);
  const { clear } = useContext(HomeContext);

  return (
    <div className="home-search">
      <div className="home-search-content">
        {filters.map((filter) => (
          <FilterCard
            key={filter}
            item={filter}
            removeFilter={() => removeFilter(filter)}
          />
        ))}
      </div>
      <p onClick={() => clear()}>Clear</p>
    </div>
  );
}

export default SearchBox;
