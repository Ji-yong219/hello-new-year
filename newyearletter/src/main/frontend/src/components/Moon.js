import React, { Component } from 'react';
import styled from 'styled-components'

import $ from 'jquery';
// import moon_image from '../assets/images/moon.png';
import moon_image from '../assets/images/moon-noblur.png';

// const SphereStyle = {
//   borderRadius: "100%",
//   width: "300px",
//   height: "300px",
//   overflow: "hidden",
//   display: "flex",
//   alignItems: "center",
//   position: "relative",
//   marginBottom: "50px"
// }
// const HemisphereStyle = {
//   width: "50%",
//   height: "100%"
// }
// const LightStyle = {
//   background: "#FFF484"
// }
// const DarkStyle = {
//   background: "#575851"
// }

// const DividerStyle = {
//   top: "0",
//   left: "0",
//   width: "300px",
//   height: "300px",
//   position: "absolute",
//   borderRadius: "100%",
//   transformStyle: "preserve-3d",
//   backfaceVisibility: "hidden",
//   backgroundColor: "#575851",
// }
// const DividerAfterStyle = {
//   top: "0",
//   left: "0",
//   width: "300px",
//   height: "300px",
//   position: "absolute",
//   borderRadius: "100%",
//   transformStyle: "preserve-3d",
//   backfaceVisibility: "hidden",
  
//   content: '',
//   backgroundColor: "#FFF484",
//   transform: "rotateY(180deg)",
// }

const defaultMoney = 150000

class Moon extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {
    const setMoonRotation = money => {
      // let deg = money < 500000 ? money * 0.00036 : 180
      let deg = money < 500000 ? money / 2500 : 200

      // document.querySelector('.divider').style.transform = `rotate3d(0, 1, 0, ${deg}deg)`
      // const hemispheres = document.querySelectorAll('.hemisphere')

      if (deg < 100) {
          // Left
          // $(".dividerAfter").css("backfaceVisibility", "hidden")
          // $(hemispheres[0]).attr("background", "#FFE05D")
          // $(hemispheres[1]).attr("background", "#575851")
          
        // document.querySelector('.moon-container #leftShadow').setAttribute("d", `M 0 100 A 100 ${100-deg} 0 0 1 200 100 L 100 100 Z`)
        // document.querySelector('.moon-container #rightShadow').setAttribute("rx", 0)
        $('.moon-container #leftShadow').attr("d", `M 0 100 A 100 ${100-deg} 0 0 1 200 100 L 100 150 Z`)
        $('.moon-container #rightShadow').attr("rx", 0)
      } else {
        // $(".dividerAfter").css("backfaceVisibility", "visible")
        // document.querySelector('.dividerAfter').style.transform = `rotate3d(0, 1, 0, ${deg}deg)`

        // document.querySelector('.moon-container #leftShadow').setAttribute("d", `M 0 100 A 100 0 0 0 1 200 100 L 100 100 Z`)
        // document.querySelector('.moon-container #rightShadow').setAttribute("rx", deg-100)
        $('.moon-container #leftShadow').attr("d", `M 0 100 A 100 0 0 0 1 000 100 L 100 100 Z`)
        $('.moon-container #rightShadow').attr("rx", deg-100)
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
            {/* <div className="sphere" style={SphereStyle}>
              <div className="light hemisphere" style={Object.assign({},HemisphereStyle, LightStyle)}></div>
              <div className="dark hemisphere" style={Object.assign({},HemisphereStyle, DarkStyle)}></div>
              <div className="divider" style={DividerStyle}></div>
              <div className="dividerAfter" style={DividerAfterStyle}></div>
            </div> */}
            
            <div className="moon-container" style={{
                    width: "200px",
                    height: "200px",
                    background: "#343434",
                    borderRadius: "50%",
                    boxShadow: "0 0 30px 30px #FFE05D",
                  }}>
                <svg viewBox="0 0 200 200">
                    <defs>
                        <pattern id="img1" patternUnits="userSpaceOnUse" width="200" height="200">
                            <image href={moon_image} x="0" y="0" width="200" height="200" />
                        </pattern>

                        <mask id="mask">
                            <g transform="rotate(270, 100, 100)">
                                <path d="M 0 100
                                        A 100 100 0 0 1 200 100
                                        L 100 100
                                        Z"
                                    fill="#ffffff"
                                />
                            </g>
                            <ellipse
                                id="rightShadow"
                                fill="#ffffff"
                                cx="100" cy="100"
                                rx="0" ry="100"
                            />
                        </mask>
                    </defs>
                    <image
                        mask="url(#mask)"
                        xlinkHref={moon_image}
                        width="200"
                        height="200">
                    </image>
                    <g transform="rotate(270, 100, 100)">
                        <path id="leftShadow" d="M 0 100
                                A 100 60 0 0 1 200 100
                                L 100 150
                                Z" 
                            fill="#343434"
                        />
                    </g>
                </svg>
            </div>
            

            <div></div>
            <div><br/></div>
          </>
      );
  }
}
export default Moon;