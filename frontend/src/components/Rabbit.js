import React, { Component } from 'react'

import $ from 'jquery'

function importAll(type, r) {
  let images = []
  r.keys().forEach((item, index) => {
    images.push([
      item.replace('./', '').replace(`${type}_`, '#').replace('.png', ''),
      r(item),
    ])
  })
  return images
}
const rabbitList = importAll(
  'rabbit',
  require.context(
    '../assets/images/customize/rabbit',
    false,
    /\.(png|jpe?g|svg)$/
  )
)
const accessoryList = importAll(
  'accessory',
  require.context(
    '../assets/images/customize/accessory',
    false,
    /\.(png|jpe?g|svg)$/
  )
)
const accessoryIconList = importAll(
  'accessoryIcon',
  require.context(
    '../assets/images/customize/icon',
    false,
    /\.(png|jpe?g|svg)$/
  )
)

// const RabbitColor =
let RabbitColor = []
let RabbitImg = []
rabbitList.map(([name, image]) => {
  RabbitColor.push(
    <td key={name}>
      <button></button>
    </td>
  )
  RabbitImg.push(
    <img
      key={name}
      alt=""
      className="rabbit"
      style={{
        position: 'relative',
        margin: '0 auto',
        width: '80%',
        display: 'none',
        zIndex: '5000',
      }}
      src={image}
    />
  )
})

let AccessoryImg = []
let AccessoryIcon = []
accessoryList.map(([name, image]) => {
  AccessoryImg.push(
    <img
      key={name}
      id={name}
      className="accessory"
      style={{ display: 'none', zIndex: '5001' }}
      src={image}
    />
  )
})
accessoryIconList.map(([name, image]) => {
  AccessoryIcon.push(
    <td key={name}>
      <img className="accessoryIcon" key={name} src={image} alt={name} />
    </td>
  )
})

function CustomRabbit({ color, accessory, isCustom = false }) {
  // Customizing
  $('.RabbitContainer').css({
    position: 'relative',
    width: '360px',
    height: '420px',
    textAlign: 'center',
  })
  $($('.rabbit')[color - 1]).css({
    display: 'block',
  })

  $('.accessory').css({
    position: 'absolute',
    flex: '1',
  })
  if ({ accessory } != 0) {
    $($('.accessory')[accessory - 1]).css({
      display: 'block',
    })
  }

  $('#Carrot').css({
    width: '26%',
    left: '49%',
    top: '39%',
    zIndex: '5002',
  })
  $('#Cushion').css({
    width: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '60%',
    zIndex: '4999',
  })
  $('#Flower').css({
    width: '33.5%',
    left: '26%',
    top: '9.5%',
  })
  $('#Hanbok').css({
    width: '72.5%',
    left: '13%',
    top: '40%',
    zIndex: '5001',
  })
  $('#Hanbok2').css({
    width: '70.9%',
    left: '14%',
    top: '40%',
    zIndex: '5001',
  })
  $('#Pocket').css({
    width: '23.5%',
    left: '50%',
    top: '40.5%',
    zIndex: '5002',
  })
  $('#Ribbon').css({
    width: '30%',
    left: '36%',
    top: '14%',
  })
  $('#Sunglasses').css({
    width: '33%',
    left: '39%',
    top: '29%',
  })

  $('.customizePicker tr').css({
    borderBottom: '1px solid rgba(202, 191, 176, 0.5)',
  })
  $('.customizePicker th,.customizePicker td').css({
    height: '40px',
    color: 'rgba(202, 191, 176, 0.5)',
    textAlign: 'left',
    fontFamily: 'nanumRound',
    fontSize: '18px',
  })
  $('.customizePicker button,.customizePicker .accessoryIcon').css({
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
  })
  $('.customizePicker .accessoryIcon').css({
    borderRadius: '0',
    border: 'none',
    objectFit: 'scale-down',
  })

  $('.customizePicker .colorList button').each((i, el) => {
    $(el).css({
      background: rabbitList[i][0],
      border: '0.5px solid gray',
    })
  })

  const swichOption = React.useCallback(() => {
    const rabbits = document.getElementsByClassName('rabbit')
    const accessorys = document.getElementsByClassName('accessory')

    console.log(rabbits)
    $(rabbits).css('display', 'none')
    rabbits[color].style.display = 'block'
    rabbits[color].style.width = '80%'

    $(accessorys).css('display', 'none')
    if (accessorys[accessory].style.display === 'none') {
      accessorys[accessory].style.display = 'block'
    } else {
      accessorys[accessory].style.display = 'none'
    }
  }, [accessory, color])

  React.useEffect(() => {
    swichOption()
  }, [color, accessory])

  React.useEffect(() => {
    const rabbits = document.getElementsByClassName('rabbit')
    $(rabbits).css('display', 'none')
  }, [])
  return (
    <>
      <div className="RabbitContainer" style={{ width: '360px' }}>
        {AccessoryImg}
        {RabbitImg}
      </div>
    </>
  )
}
export default CustomRabbit
