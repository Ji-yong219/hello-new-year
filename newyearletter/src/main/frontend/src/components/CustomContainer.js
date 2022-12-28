import React from 'react';

import $ from 'jquery';
import CustomRabbit from '../components/Rabbit'
import Moon from '../components/Moon'

function CustomContainer({
      money = 150000,
      debug = false,
      color=2,
      accessory=0,
      isCustom=true
                          }) {

    return(
      <>
      <div className="CustomContainer">
        <Moon money={money} debug={debug} />
        <CustomRabbit color={color} accessory={accessory} isCustom={isCustom}/>
      </div>
      </>
    )
}
export default CustomContainer;