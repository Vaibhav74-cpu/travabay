import React, { useState } from 'react'
import { PiCaretDown } from "react-icons/pi";

function TopNavbar() {
    const[toggle, setToggle] = useState(false);

    const showDestinations = () => {
        console.log("Arrow has been clicked");
        setToggle(true);
    }

  return (
    <>
    </>
  )
}

export default TopNavbar