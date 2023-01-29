import React from "react";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
function TopButton() {
  let mybutton = document.getElementById("top-btn");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
  return (
    <div
      className="top-btn"
      id="top-btn"
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <ExpandLessRoundedIcon />
    </div>
  );
}

export default TopButton;