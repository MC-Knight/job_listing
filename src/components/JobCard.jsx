import PropTypes from "prop-types";
import ToolCard from "./ToolCard";
import FeaturedCard from "./FeaturedCard";
import NewCard from "./NewCard";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-details">
        {job.new && job.featured && <div className="indicator"></div>}
        <div className="job-info">
          <div className="job-info-img">
            <img src={job.logo} alt="" />
          </div>

          <div className="job-info-details">
            <div className="job-info-details-company">
              <h3>{job.company}</h3>
              {job.new && <NewCard />}
              {job.featured && <FeaturedCard />}
            </div>
            <h1>{job.position}</h1>
            <div className="job-info-details-location">
              <p>{job.postedAt}</p>
              <p>•</p>
              <p>{job.contract}</p>
              <p>•</p>
              <p>{job.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="job-tools">
        <div className="job-tools-cards">
          {job.tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}

          {job.languages.map((tool, index) => (
            <ToolCard key={index + 1000} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobCard;
