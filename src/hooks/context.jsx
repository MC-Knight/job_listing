import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import data from "../data";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  useEffect(() => {
    doFilter();
  }, [filters]);

  const addFilter = (el) => {
    !filters.includes(el) && setFilters((filters) => [...filters, el]);
  };

  const removeFilter = (el) => {
    setFilters((filters) => filters.filter((elem) => elem !== el));
  };

  const doFilter = () => {
    setFilteredJobs(
      jobs.filter((item) =>
        filters.every((filter) =>
          [item.role, item.level, ...item.languages, ...item.tools].includes(
            filter
          )
        )
      )
    );
  };

  const clear = () => {
    setFilters([]);
    setFilteredJobs(jobs);
  };

  return (
    <HomeContext.Provider
      value={{
        jobListings: filteredJobs,
        filterJobListings: addFilter,
        filters,
        removeFilter,
        clear,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

HomeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
