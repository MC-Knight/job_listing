import { useContext } from "react";
import JobCard from "../components/JobCard";
import SearchBox from "../components/SearchBox";
import { HomeContext } from "../hooks/context";

function Home() {
  const { jobListings } = useContext(HomeContext);
  return (
    <div className="home">
      <div className="home-top"></div>

      <div className="home-jobs">
        <SearchBox />
        {jobListings.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Home;
