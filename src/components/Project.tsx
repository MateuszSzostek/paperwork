import React, { useState } from "react"
import OptionsPopover from "../components/OptionsPopover"

interface IProject {
  project: string
  vendor: string
  numOfContracts: string
  totalValue: string
}

const Project = (props: IProject) => {
  const { vendor, numOfContracts, project, totalValue } = props
  const [moreActive, setMoreActive] = useState<boolean>(false)

  const [duplicatePopover, setDuplicatePopover] = useState<boolean>(false)
  const [editPopover, setEditPopover] = useState<boolean>(false)
  const [delPopover, setDelPopover] = useState<boolean>(false)

  return (
    <div
      style={moreActive ? { minHeight: "230px" } : { minHeight: "46px" }}
      className="contract-container trans-03s"
    >
      <div className="flex col relative">
        <div className="flex row ">
          <div className="mt-15px"> {vendor}</div>
        </div>
        <div
          style={moreActive ? { opacity: "100%" } : {}}
          className="absolute mt-80px more-contract-info flex col trans-03s opacity-0"
        ></div>
      </div>
      <div className="color-light-gray mt-15px">{numOfContracts}</div>

      <div className="color-light-gray">
        <div className="flex col relative">
          <div className="mt-15px">{project}</div>
        </div>
      </div>
      <div className="color-light-gray">
        <div className="flex col relative">
          <div className="mt-15px">{totalValue}</div>
        </div>
      </div>
      <OptionsPopover
        edit={setEditPopover}
        duplicate={setDuplicatePopover}
        del={setDelPopover}
      />
    </div>
  )
}

export default Project
