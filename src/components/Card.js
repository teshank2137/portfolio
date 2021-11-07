import StyledCard from "./CardStyled";

const JobCard = ({ position, compName, timestamp, description }) => {
  return (
    <StyledCard>
      <div className="card">
        <h2 className="card-title">{position}</h2>
        <div className="card-body">
          <h3 className="card-compName">{compName}</h3>
          <div className="card-timestamp">{timestamp}</div>
          <p className="card-description">
            {description.map((e) => (
              <span>
                {e} <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </StyledCard>
  );
};

export default JobCard;
