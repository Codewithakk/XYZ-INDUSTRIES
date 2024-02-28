import { Button } from "@mui/material";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="terms-and-conditions">
        <h1 className="connecting-dreams-to-container">
          <p className="connecting-dreams-to">CONNECTING DREAMS TO REALITY</p>
          <p className="your-premier">
            <i className="your-premier1">YOUR PREMIER</i>
          </p>
          <p className="real-estate-marketplace">REAL ESTATE MARKETPLACE</p>
        </h1>
        <div className="where-every-search">
          Where every search ends with a home
        </div>
      </div>
      <div className="customer-support">
        <Button
          className="primary-button1"
          endIcon={
            <img width="24px" height="24px" src="/arrow-forward-resting.svg" />
          }
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background: "#3a7dff",
            borderRadius: "40px",
            "&:hover": { background: "#3a7dff" },
            width: 224,
            height: 58,
          }}
        >
          Find Your Home
        </Button>
        <Button
          className="primary-button2"
          endIcon={
            <img
              width="24px"
              height="24px"
              src="/arrow-forward-resting-1.svg"
            />
          }
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background: "#3a7dff",
            borderRadius: "40px",
            "&:hover": { background: "#3a7dff" },
            height: 58,
          }}
        >
          List Your Property
        </Button>
      </div>
    </div>
  );
};

export default Testimonials;
