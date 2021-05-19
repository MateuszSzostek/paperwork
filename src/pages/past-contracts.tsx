import React, {useState, useEffect} from 'react'
import pastContractsData from "../data/pastContractsData"
import Layout from "../components/Layout"
import Contract from "../components/Contract"
import bellPlus from '@iconify-icons/tabler/bell-plus';
import { Icon } from '@iconify/react';


const PastContracts = ({children}) => {
     const [contracts, setContracts] = useState();

    const SOWcontracts = pastContractsData.filter(s => s.type ==="SOW")
    const ConsultantAgreementContracts = pastContractsData.filter(s => s.type ==="Consultant Agreement")
    const NDAContracts = pastContractsData.filter(s => s.type ==="NDA")

    console.log(SOWcontracts);
     console.log(ConsultantAgreementContracts);
     console.log(NDAContracts);
    return (
        <Layout>
            <div className="flex row align-center">
                <h2>Past Contracts</h2>
                <div className="contracts-amount-container">
                    <div>3</div>
                </div>
            </div>
            <div className="grid-active-contracts-titles">
                <div className="flex col">
                    <span className="color-gray">Cost of active contracts</span>
                    <span className="weight-600 margin-y-10px">$ 32,000</span>
                </div>
                <div className="flex col">
                    <span className="color-gray">Highest cost project</span>
                    <span className="weight-600 margin-y-10px">Nokia</span>
                </div>
                <div className="flex col">
                    <span className="color-gray">Highest cost vendor</span>
                    <span className="weight-600 margin-y-10px">Traduko AB</span>
                </div>
            </div>
            <br/>
            <br/>
            <div className="contracts-container">
                <h3 className="">SOW</h3>
                <div className="grid-active-contracts-titles">
                <div className="flex col">
                    <span className="color-gray font-14px ">VENDORS</span>
                </div>
                <div className="flex col">
                    <span className="color-gray font-14px ">PROJECT</span>
                </div>
                <div className="flex col">
                    <span className="color-gray font-14px ">TIME PERIOD</span>
                </div>
                <div className="flex col">
                    <span className="color-gray font-14px ">CONTRACT VALUE</span>
                </div>
            </div>
                {SOWcontracts.map(s => <>
                    <Contract 
                    key={s.id} 
                    vendor={s.vendor} 
                    timePeriod={s.timePeriod} 
                    project={s.project} 
                    contractValue={s.contractValue} 
                    progress={s.progress}
                    vendorMore={s.vendorMore}
                    timePeriodMore={s.timePeriodMore}
                    contractValueMore={s.contractValueMore}/>
                </>
                    
                )}
                <h3 className="">Consulting Agreement</h3>
                <div className="grid-active-contracts-titles">
                <div className="flex col">
                    <span className="color-gray font-14px ">VENDORS</span>
                </div>
                <div className="flex col">
                    <span className="color-gray font-14px ">PROJECT</span>
                </div>
                <div className="flex col">
                    <span className="color-gray font-14px ">TIME PERIOD</span>
                </div>
                <div className="flex col">
                    <span className="color-gray font-14px ">CONTRACT VALUE</span>
                </div>
            </div>
                {ConsultantAgreementContracts.map(s => 
                   <>
                    <Contract 
                    key={s.id} 
                    vendor={s.vendor} 
                    timePeriod={s.timePeriod} 
                    project={s.project} 
                    contractValue={s.contractValue} 
                    progress={s.progress}
                    vendorMore={s.vendorMore}
                    timePeriodMore={s.timePeriodMore}
                    contractValueMore={s.contractValueMore}/>
                </>
                )}
                <h3 className="">NDA</h3>
                <div className="grid-active-contracts-titles">
                <div className="flex col">
                    <span className="color-gray font-14px ">VENDORS</span>
                </div>
                <div className="flex col">
                    <span className="color-gray font-14px ">PROJECT</span>
                </div>
                <div className="flex col">
                    <span className="color-gray font-14px ">TIME PERIOD</span>
                </div>
                <div className="flex col">
                    <span className="color-gray font-14px ">CONTRACT VALUE</span>
                </div>
            </div>
                {NDAContracts.map(s => 
                   <>
                    <Contract 
                    key={s.id} 
                    vendor={s.vendor} 
                    timePeriod={s.timePeriod} 
                    project={s.project} 
                    contractValue={s.contractValue} 
                    progress={s.progress}
                    vendorMore={s.vendorMore}
                    timePeriodMore={s.timePeriodMore}
                    contractValueMore={s.contractValueMore}/>           
                </>
                )}
            </div>
            {children}
        </Layout>
    )
}

export default PastContracts
