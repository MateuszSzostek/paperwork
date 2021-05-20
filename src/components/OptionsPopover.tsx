import React, { useState } from "react"
import { Icon } from "@iconify/react"
import threeDotsVertical from "@iconify-icons/bi/three-dots-vertical"

const OptionsPopover = () => {
  const [popover, setPopover] = useState<boolean>(false)
  return (
    <div
      onMouseEnter={() => setPopover(true)}
      onMouseLeave={() => setPopover(false)}
      className="relative pointer flex align-center option-button "
      style={{ height: "50px" }}
    >
      <Icon height={20} icon={threeDotsVertical} />
      <div
        style={popover ? { display: "flex" } : { display: "none" }}
        className="popover-element col p-10px absolute"
      >
        <div className="py-5px option-ele-text">Edit</div>
        <div className="py-5px option-ele-text">Duplicate</div>
        <div className="py-5px option-ele-text">Delete</div>
      </div>
    </div>
  )
}

export default OptionsPopover
