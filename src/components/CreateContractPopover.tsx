import React from "react"
import { ContractTypes } from "../data/contractTypes"
import vendorData from "../data/vendorData"
import Button from "../components/Button"

const CreateContractPopover = () => {
  return (
    <div className="fixed t0 l0 w100vw h100vh flex justify-center align-center z-50 bg-black-transparent">
      <div className="absolute bg-color-dark-gray flex col br-radius-15px br-1-soli-gray">
        <h2 style={{ padding: "20px 90px 0px 90px" }}>Chose templates</h2>
        <span style={{ margin: "10px 30px 10px 30px " }}>Select vendor:</span>
        <select
          style={{
            backgroundColor: "black",
            marginRight: "0px",
            borderRadius: "0px",
            borderTop: "1px gray solid",
          }}
          className="form-input"
          name="vendor"
          id="vendor"
        >
          {vendorData.map(s => (
            <>
              <option key={s.id} value={s.vendor}>
                {s.vendor}
              </option>
            </>
          ))}
        </select>
        <span style={{ margin: "10px 30px 10px 30px " }}>Select contract:</span>
        {ContractTypes.map((s, idx) => (
          <div style={{ padding: "5px 30px 5px 30px" }} key={idx}>
            <input type="checkbox" id={s} name={s} value={s} />
            <label htmlFor={s}>{s}</label>
          </div>
        ))}
        <div style={{ margin: "10px 30px 20px 30px " }}>
          <Button slug="/create-contract" backgroundColor="#7811ff">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateContractPopover
