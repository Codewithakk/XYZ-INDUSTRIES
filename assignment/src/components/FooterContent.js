import { Button } from "@mui/material";
import "./FooterContent.css";

const FooterContent = () => {
  return (
    <section className="footer-content">
      <div className="image-holder-parent">
        <div className="image-holder">
          <img
            className="image-203-flattened"
            alt=""
            src="/image-203-flattened@2x.png"
          />
          <div className="image-holder-child" />
        </div>
        <div className="primary-button3">
          <div className="our-partners">
            <h1 className="your-trusted-partner-container">
              <p className="your-trusted-partner-in">
                <span className="your">{`YOUR `}</span>
                <i className="trusted">TRUSTED</i>
                <span className="partner-in"> PARTNER IN</span>
              </p>
              <p className="the-future-of-housing">
                <span className="the-future">{`THE FUTURE `}</span>
                <i className="of-housing">OF HOUSING</i>
              </p>
            </h1>
            <div className="our-partnerships-with">
              Our partnerships with governments and local banks ensure that our
              housing prices are affordable enough for our target market.
            </div>
          </div>
          <Button
            className="secondary-button1"
            endIcon={
              <img
                width="24px"
                height="24px"
                src="/arrow-forward-resting-2.svg"
              />
            }
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "20",
              background: "#3a7dff",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#3a7dff" },
              width: 323,
              height: 58,
            }}
          >
            Join Our Community Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FooterContent;
