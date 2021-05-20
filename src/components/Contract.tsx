import React, { useState } from "react"
import { Item } from "../helpers/helpers"
import { Icon } from "@iconify/react"
import arrowRightAlt2 from "@iconify-icons/dashicons/arrow-right-alt2"
import threeDotsVertical from "@iconify-icons/bi/three-dots-vertical"
import OptionsPopover from "../components/OptionsPopover"

const Contract = (props: Item) => {
  const {
    project,
    timePeriod,
    contractValue,
    vendor,
    progress,
    contractValueMore,
    timePeriodMore,
    vendorMore,
  } = props
  const [moreActive, setMoreActive] = useState<boolean>(false)
  const toggleSeeMore = () => {
    setMoreActive(!moreActive)
  }
  console.log(vendorMore)
  return (
    <div
      style={moreActive ? { minHeight: "230px" } : { minHeight: "46px" }}
      className="contract-container trans-03s"
    >
      <div className="flex col relative">
        <div className="flex row ">
          <div onClick={toggleSeeMore} className="pointer mt-15px">
            <Icon icon={arrowRightAlt2} />
          </div>
          <div className="mt-15px"> {vendor}</div>
        </div>
        <div
          style={moreActive ? { opacity: "100%" } : {}}
          className="absolute mt-80px more-contract-info flex col trans-03s opacity-0"
        >
          {vendorMore.map(
            (s, idx) =>
              moreActive && (
                <span
                  key={idx}
                  className="my-2px color-light-gray font-14px trans-03s"
                >
                  {s}
                </span>
              )
          )}
        </div>
      </div>
      <div className="color-light-gray mt-15px">{project}</div>
      <div className="flex col relative">
        <div className="time-period-progress-bar relative">
          <div style={{ width: progress }} className="progress absolute"></div>
        </div>
        <div className="color-light-gray font-14px mt-10px">{timePeriod}</div>
        <div
          style={moreActive ? { opacity: "100%" } : {}}
          className="absolute mt-80px more-contract-info flex col trans-03s opacity-0"
        >
          {timePeriodMore.map(
            (s, idx) =>
              moreActive && (
                <span
                  key={idx}
                  className="my-2px color-light-gray font-14px trans-03s"
                >
                  {s}
                </span>
              )
          )}
        </div>
      </div>
      <div className="color-light-gray">
        <div className="flex col relative">
          <div className="mt-15px">{contractValue}</div>
          <div
            style={moreActive ? { opacity: "100%" } : {}}
            className="absolute mt-80px more-contract-info flex col trans-03s opacity-0"
          >
            {contractValueMore.map(
              (s, idx) =>
                moreActive && (
                  <span
                    key={idx}
                    className="my-2px color-light-gray font-14px trans-03s"
                  >
                    {s}
                  </span>
                )
            )}
          </div>
        </div>
      </div>
      <OptionsPopover />
    </div>
  )
}

export default Contract
