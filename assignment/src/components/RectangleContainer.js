import { useMemo } from "react";
import "./RectangleContainer.css";

const RectangleContainer = ({
  frameGroup,
  detailedListings,
  everyDetailMattersSellers,
  propPadding,
}) => {
  const rectangleContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="rectangle-container" style={rectangleContainerStyle}>
      <div className="text-block">
        <img className="text-block-child" alt="" src="/line-202.svg" />
        <div className="image-flattened">
          <div className="text-block1">
            <div className="frame-group">{frameGroup}</div>
            <div className="link-collection">
              <div className="detailed-listings">{detailedListings}</div>
              <div className="trusted-partner-frame" />
            </div>
          </div>
          <div className="every-detail-matters">
            {everyDetailMattersSellers}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleContainer;
