import React from "react"
import Button from "../components/Button"

const DeletePop = () => {
  return (
    <>
      <div className="py-5px my-2px">Delete this item? </div>
      <div>
        <Button textColor="black" backgroundColor="#ff9999">
          Delete
        </Button>
      </div>
    </>
  )
}

export default DeletePop
