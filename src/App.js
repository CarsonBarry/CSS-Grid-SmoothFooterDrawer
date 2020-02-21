import React from "react";
import "./css/framework/clear.css";
import "./css/fonts.css";
import "./css/framework/flexbox.css";
import "./css/framework/grid.css";
import "./css/framework/order.css";
import "./css/framework/showhide.css";
import "./css/framework/buttons.css";
import "./css/structure.css";
import "./css/framework/quickstyles.css";
import "./css/styles.css";

export default function App() {
  function test() {
    var test = document.getElementById("drawer");
    test.classList.toggle("active");
  }

  return (
    <div id="main" className="App font-Din">
      <button onClick={test}>Test</button>

      <div id="drawer" class="bcolor-grey80 tcolor-white flex-jC">
        <h1>Footer</h1>
      </div>
    </div>
  );
}
