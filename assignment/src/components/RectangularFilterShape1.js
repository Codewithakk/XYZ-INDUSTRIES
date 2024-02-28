import { useMemo } from "react";
import "./RectangularFilterShape1.css";

const RectangularFilterShape1 = ({
  image199,
  discoverYourPerfectHome,
  useOurAdvancedFiltersToNa,
  propWidth,
}) => {
  const discoverYourPerfectStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="rectangular-filter-shape">
      <img className="image-199-icon" loading="lazy" alt="" src={image199} />
      <div className="link-gathering-frame">
        <h1 className="discover-your-perfect" style={discoverYourPerfectStyle}>
          {discoverYourPerfectHome}
        </h1>
        <div className="use-our-advanced">{useOurAdvancedFiltersToNa}</div>
        <div className="learn-more">Learn More</div>
      </div>
    </div>
  );
};

export default RectangularFilterShape1;
