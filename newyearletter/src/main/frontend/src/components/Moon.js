import React from 'react';

import $ from 'jquery';
// import moon_image from '../assets/images/moon.png';
import moon_image from '../assets/images/moon-noblur.png';

function Moon({money = 150000}) {
    const setMoonRotation = money => {
      let deg = money < 500000 ? money / 2500 : 200

      if (deg < 100) {
        $('.moon-container #leftShadow').attr("d", `M 0 100 A 100 ${100-deg} 0 0 1 200 100 L 100 150 Z`)
        $('.moon-container #rightShadow').attr("rx", 0)
      } else {
        $('.moon-container #leftShadow').attr("d", `M 0 100 A 100 0 0 0 1 000 100 L 100 100 Z`)
        $('.moon-container #rightShadow').attr("rx", deg-100)
      }
    }
    
    $(() => setMoonRotation(money))

    $(document)
    .on("input", "#moon_slider", (e) => {
      const money = $(e.target).val()
      $("#money").text(money+"원 (50만원 부터 보름달)")
      setMoonRotation(money)
    })

    return(
        <>
          <span type="text" id="money">{money}원 (50만원 부터 보름달)</span>
          <input
            id="moon_slider"
            type="range"
            defaultValue={money}
            min="0"
            max="750000"
          />
          
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
    )
}
export default Moon;