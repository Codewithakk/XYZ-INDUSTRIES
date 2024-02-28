import { useMemo } from "react";
import "./RectangularFilterShape.css";

const RectangularFilterShape = ({
  showcaseYourProperty,
  listYourPropertyWithEaseF,
  image200,
  propWidth,
}) => {
  const showcaseYourPropertyStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="rectangular-filter-shape1">
      <div className="frame-for-filters-parent">
        <div className="frame-for-filters">
          <h1
            className="showcase-your-property"
            style={showcaseYourPropertyStyle}
          >
            {showcaseYourProperty}
          </h1>
          <div className="list-your-property">{listYourPropertyWithEaseF}</div>
          <div className="learn-more1">Learn More</div>
        </div>
        <img className="image-200-icon" loading="lazy" alt="" src={image200} />
      </div>
    </div>
  );
};

export default RectangularFilterShape;
