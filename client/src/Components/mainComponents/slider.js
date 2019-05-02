import React from 'react';

const Slider = () => {
    <div id="bubblebox">
  <div id="bubbles">
    <div onclick="bubbles(0); clearInterval(intrvl);" style="background:#999;"></div>
    <div onclick="bubbles(1); clearInterval(intrvl);"></div>
    <div onclick="bubbles(2); clearInterval(intrvl);"></div>
    <div onclick="bubbles(3); clearInterval(intrvl);"></div>
  </div>
  <div id="bubblecontent">
    <h2>Heading Number 1</h2>
    <p>Content for section 1</p>
  </div>
</div>
}

export default Slider; 