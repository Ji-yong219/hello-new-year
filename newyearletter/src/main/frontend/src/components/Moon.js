import React, { Component } from 'react';
import styled from 'styled-components'

import $ from 'jquery';
import moon_image from '../assets/images/moon.png';

const SphereStyle = {
  borderRadius: "100%",
  width: "300px",
  height: "300px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  position: "relative",
  marginBottom: "50px",
  // backgroundImage: `url(${moon_image})`,
  // backgroundSize: "320px",
  // backgroundPosition: "-10px -10px"
}
const HemisphereStyle = {
  width: "50%",
  height: "100%",
  // opacity: "0"
}
const LightStyle = {
  background: "#FFF484"
}
const DarkStyle = {
  background: "#575851"
}

const DividerStyle = {
  top: "0",
  left: "0",
  width: "300px",
  height: "300px",
  position: "absolute",
  borderRadius: "100%",
  transformStyle: "preserve-3d",
  backfaceVisibility: "hidden",
  backgroundColor: "#575851", /* Dark */
}
const DividerAfterStyle = {
  top: "0",
  left: "0",
  width: "300px",
  height: "300px",
  position: "absolute",
  borderRadius: "100%",
  transformStyle: "preserve-3d",
  backfaceVisibility: "hidden",
  
  content: '',
  backgroundColor: "#FFF484", /* Light */
  transform: "rotateY(180deg)",
}

const defaultMoney = 150000

class Moon extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {
    const setMoonRotation = money => {
      let deg = money < 500000 ? money * 0.00036 : 180
      document.querySelector('.divider').style.transform = `rotate3d(0, 1, 0, ${deg}deg)`

      const hemispheres = document.querySelectorAll('.hemisphere')

      if (deg < 90) {
          // Left
          $(".dividerAfter").css("backfaceVisibility", "hidden")
          $(hemispheres[0]).attr("background", "#FFE05D")
          $(hemispheres[1]).attr("background", "#575851")
          console.log("light")
      } else {
        $(".dividerAfter").css("backfaceVisibility", "visible")
        document.querySelector('.dividerAfter').style.transform = `rotate3d(0, 1, 0, ${deg}deg)`
      }
    }
    setMoonRotation(defaultMoney)

    $(document)
    .on("input", "#moon_slider", (e) => {
      const money = $(e.target).val()
      $("#money").text(money+"원 (50만원 부터 보름달)")
      setMoonRotation(money)
    })
  }

  render() {
      return(
          <>
            <span type="text" id="money">{defaultMoney}원 (50만원 부터 보름달)</span>
            <input
              id="moon_slider"
              type="range"
              defaultValue={defaultMoney}
              min="0"
              max="750000"
            />
            <div className="sphere" style={SphereStyle}>
              <div className="light hemisphere" style={Object.assign({},HemisphereStyle, LightStyle)}></div>
              <div className="dark hemisphere" style={Object.assign({},HemisphereStyle, DarkStyle)}></div>
              <div className="divider" style={DividerStyle}></div>
              <div className="dividerAfter" style={DividerAfterStyle}></div>
            </div>

            <div></div>
            <div><br/></div>
          </>
      );
  }
}
export default Moon;