import { Button } from "@mui/material";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <header className="search-bar">
      <div className="filter-section">
        <div className="text-input">
          <h1 className="xyz-industries">
            <span className="xyz">
              <span className="xyz1">XYZ</span>
              <span className="span">{` `}</span>
            </span>
            <i className="industries">INDUSTRIES</i>
          </h1>
        </div>
        <div className="navigation-menu">
          <div className="rectangle">
            <div className="menu-buttons">
              <div className="home">Home</div>
            </div>
            <div className="menu-buttons1">
              <div className="home1">About Us</div>
            </div>
            <div className="menu-buttons2">
              <div className="home2">Property</div>
            </div>
            <div className="menu-buttons3">
              <div className="home3">Services</div>
            </div>
            <div className="menu-buttons4">
              <div className="home4">Contact</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Button
          className="secondary-button"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#071a45",
            fontSize: "20",
            borderColor: "#071a45",
            borderRadius: "40px",
            "&:hover": { borderColor: "#071a45" },
            height: 58,
          }}
        >
          Sign Up
        </Button>
        <Button
          className="primary-button"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background: "#3a7dff",
            borderRadius: "40px",
            "&:hover": { background: "#3a7dff" },
            width: 101,
            height: 58,
          }}
        >
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default SearchBar;
