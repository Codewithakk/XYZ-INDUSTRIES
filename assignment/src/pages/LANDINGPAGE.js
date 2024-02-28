import SearchBar from "../components/SearchBar";
import Testimonials from "../components/Testimonials";
import GroupFilters from "../components/GroupFilters";
import SubscribeToNewsletter from "../components/SubscribeToNewsletter";
import FooterContent from "../components/FooterContent";
import Footer from "../components/Footer";
import "./LANDINGPAGE.css";

const LANDINGPAGE = () => {
  return (
    <div className="landing-page">
      <section className="content-container">
        <SearchBar />
        <Testimonials />
      </section>
      <img className="test-1-1" alt="" src="/test-1-1@2x.png" />
      <section className="input-field-search">
        <img
          className="text-container-search"
          loading="lazy"
          alt=""
          src="/rectangle-8299@2x.png"
        />
      </section>
      <GroupFilters />
      <SubscribeToNewsletter />
      <FooterContent />
      <Footer />
    </div>
  );
};

export default LANDINGPAGE;
