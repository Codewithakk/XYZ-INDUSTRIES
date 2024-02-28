import RectangleContainer from "./RectangleContainer";
import "./SubscribeToNewsletter.css";

const SubscribeToNewsletter = () => {
  return (
    <section className="subscribe-to-newsletter">
      <div className="email-input-subscribe">
        <h1 className="why-choose-xyz">WHY CHOOSE XYZ?</h1>
        <div className="yours-trusted-partner-parent">
          <div className="yours-trusted-partner">
            <img
              className="yours-trusted-partner-child"
              loading="lazy"
              alt=""
              src="/line-202.svg"
            />
            <div className="footer-frame">
              <div className="quick-links-frame">
                <div className="quick-links-frame1">01</div>
                <div className="quick-links-frame2">
                  <div className="search-and-filters">Search and Filters</div>
                  <div className="quick-links-frame-child" />
                </div>
              </div>
              <div className="tailored-searches-to">
                Tailored Searches to meet your needs. Find what you’re looking
                for with precision.
              </div>
            </div>
          </div>
          <RectangleContainer
            frameGroup="02"
            detailedListings="Detailed Listings"
            everyDetailMattersSellers="Every Detail Matters. Sellers can list, and buyers can explore properties that meet their exact specifications."
          />
          <RectangleContainer
            frameGroup="03"
            detailedListings="Direct Messaging"
            everyDetailMattersSellers="Seamless Communication. Connect directly with sellers or buyers to ask questions, negotiate, and make decisions."
            propPadding="var(--padding-221xl) 0rem 0rem"
          />
          <RectangleContainer
            frameGroup="04"
            detailedListings="Secure Payments"
            everyDetailMattersSellers="Trust in Every Transaction. Our secure payment system ensures your peace fo mind."
            propPadding="var(--padding-61xl) 0rem 0rem"
          />
        </div>
      </div>
    </section>
  );
};

export default SubscribeToNewsletter;
