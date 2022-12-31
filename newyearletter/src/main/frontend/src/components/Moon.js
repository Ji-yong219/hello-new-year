import React from 'react'

import $ from 'jquery'
import moon_image from '../assets/images/moon.png'
import moon_grey from '../assets/images/moon_grey.png'
import { useSelector } from 'react-redux'

function Moon({ debug = false }) {
  const { money } = useSelector(state => state.infoState)

  const setMoonRotation = money => {
    let deg = money < 500000 ? money / 2500 : 200

    $('.moon').css('boxShadow', `0 0 30px ${deg / 6 - 5}px #FFE05D`)
    if (deg < 100) {
      $('.moon #leftShadow').attr(
        'd',
        `M 0 100 A 100 ${100 - deg} 0 0 1 200 100 L 100 110 Z`
      )
      $('.moon #rightShadow').attr('rx', 0)
    } else {
      $('.moon #leftShadow').attr(
        'd',
        `M 0 100 A 100 0 0 0 1 000 100 L 100 100 Z`
      )
      $('.moon #rightShadow').attr('rx', deg - 100)
    }
  }

  $(() => {
    setMoonRotation(money)
  })

  $(document).on('input', '#moon_slider', e => {
    const money = $(e.target).val()
    $('#money').text(money + '원 (50만원 부터 보름달)')
    setMoonRotation(money)
  })

  return (
    <>
      {debug ? (
        <>
          <span type="text" id="money">
            {money}원 (50만원 부터 보름달)
          </span>
          <input
            id="moon_slider"
            type="range"
            defaultValue={money}
            min="0"
            max="750000"
          />
        </>
      ) : (
        <></>
      )}
      <svg
        className="moon"
        viewBox="0 0 200 200"
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${moon_grey})`,
          backgroundSize: 'contain',
          borderRadius: '50%',
          boxShadow: '0 0 30px 30px #FFE05D',
        }}
      >
        <defs>
          <pattern
            id="img1"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image href={moon_image} x="0" y="0" width="100%" height="100%" />
          </pattern>
          <pattern
            id="img2"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              href={moon_grey}
              x="0"
              y="0"
              width="100%"
              height="100%"
              transform="rotate(-270, 100, 100)"
            />
          </pattern>

          <mask id="mask">
            <g transform="rotate(270, 100, 100)">
              <path
                d="M 0 100
                    A 100 100 0 0 1 200 100
                    L 100 100
                    Z"
                fill="#ffffff"
              />
            </g>
            <ellipse
              id="rightShadow"
              fill="#ffffff"
              cx="100"
              cy="100"
              rx="100"
              ry="100"
            />
          </mask>
        </defs>
        <image
          mask="url(#mask)"
          xlinkHref={moon_image}
          width="100%"
          height="100%"
        ></image>
        <g transform="rotate(270, 100, 100)">
          <path
            id="leftShadow"
            d="M 0 100
                A 100 60 0 0 1 200 100
                L 100 110
                Z"
            fill="url(#img2)"
          />
        </g>
      </svg>
    </>
  )
}
export default Moon
