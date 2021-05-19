import React from 'react'
import Button from "../components/Button"
import "../css/styles.css"

const Login = () => {
    return (
        <section>
            <div className="width-1200">
                <h2>Add your company details</h2>
                <p className="color-light-gray font-14px">Before we can complete your profile you need to add your company details. Thesea are used to <br/> make sure your details are correct on the contracts. We will never send anything to this address or <br/> will we change this address. It's solely to make creating contracts.
                </p>
                <form className="flex col">
                    <div className="flex row">
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="Surname"></input>
                    </div>
                    <input type="text" placeholder="Company Name"></input>
                    <input type="text" placeholder="Address"></input>
                    <div className="flex row">
                        <input type="text" placeholder="Zip Code"></input>
                        <input type="text" placeholder="City"></input>
                    </div>
                    <input type="text" placeholder="Country"></input>
                </form>
                <Button backgroundColor="#7811ff" slug="/active-contracts">Next</Button>
            </div>
        </section>
    )
}

export default Login
