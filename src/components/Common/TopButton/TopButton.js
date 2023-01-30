import React from "react";
import NorthIcon from '@mui/icons-material/North';
import './TopButton.css'
function TopButton() {
  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="top-btn" id="myBtn" onClick={() => topFunction()}>
      <NorthIcon className="top-icon" sx={{ fontSize: "2rem" }} />
    </div>
  );
}

export default TopButton;