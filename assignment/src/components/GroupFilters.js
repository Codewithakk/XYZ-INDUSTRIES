import RectangularFilterShape1 from "./RectangularFilterShape1";
import RectangularFilterShape from "./RectangularFilterShape";
import "./GroupFilters.css";

const GroupFilters = () => {
  return (
    <section className="group-filters">
      <div className="rules-and-rooms-frame">
        <div className="user-voice-frame">
          <h1 className="how-it-works">HOW IT WORKS?</h1>
          <div className="step-by-step">Step by Step Guide</div>
        </div>
      </div>
      <RectangularFilterShape1
        image199="/image-199@2x.png"
        discoverYourPerfectHome="Discover Your Perfect Home"
        useOurAdvancedFiltersToNa="Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right."
      />
      <RectangularFilterShape
        showcaseYourProperty="Showcase Your Property"
        listYourPropertyWithEaseF="List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect buyer directly."
        image200="/image-200@2x.png"
      />
      <RectangularFilterShape1
        image199="/image-201@2x.png"
        discoverYourPerfectHome="Connect and Communicate"
        useOurAdvancedFiltersToNa="Our platform facilitates direct communication between buyer and seller, making negotiations transparent and straightforward."
        propWidth="unset"
      />
      <RectangularFilterShape
        showcaseYourProperty="Seal the Deal Securely"
        listYourPropertyWithEaseF="Advance payments made safe. Secure your agreement with confidence, and step closer to your dream property."
        image200="/image-202@2x.png"
        propWidth="unset"
      />
    </section>
  );
};

export default GroupFilters;
