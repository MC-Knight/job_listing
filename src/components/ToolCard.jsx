import PropTypes from "prop-types";
import { HomeContext } from "../hooks/context";
import { useContext } from "react";

function ToolCard({ tool }) {
  const { filterJobListings } = useContext(HomeContext);
  return (
    <div className="tool-card" onClick={() => filterJobListings(tool)}>
      <p>{tool}</p>
    </div>
  );
}

ToolCard.propTypes = {
  tool: PropTypes.string.isRequired,
};

export default ToolCard;
