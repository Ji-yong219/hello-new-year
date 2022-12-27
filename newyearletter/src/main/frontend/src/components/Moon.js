import React, { Component } from 'react';
import styled from 'styled-components'

import $ from 'jquery';
import moon from '../assets/images/test_moon.png';

const fullmoonBeforeStyle = {
  content: "",
  background: "linear-gradient(30deg, #13223f, #0e1a30)",
  position: "absolute",
  display: "block",
  height: "100%",
  width: "100%",
  borderRadius: "50%",
  zIndex: "-1",
  animation: "3.2s cresent"
}

class Moon extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {
    $(() => {
      $("#full_moon").css({
        position: "relative",
        borderRadius: "50%",
      })
      
      $("#full_moon::before").css({
      })
    })

    $(document)
    .on("input", "#moon_slider", (e) => {
      const moon_value = $(e.target).val()
      
      console.log(moon_value)
    })
  }

  render() {
      return(
          <>
            <img id="full_moon" src={moon}/>
            <input
              id="moon_slider"
              type="range"
              min="0"
              max="500000"
            />

            <div></div>
            <div><br/></div>
          </>
      );
  }
}
export { Moon };