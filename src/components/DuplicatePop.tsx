import React from "react"
import Button from "./Button"

const DuplicatePop = () => {
  return (
    <>
      <div className="py-5px my-2px">Duplicate this item? </div>
      <div>
        <Button textColor="black" backgroundColor="#dec5ff">
          Duplicate
        </Button>
      </div>
    </>
  )
}

export default DuplicatePop
