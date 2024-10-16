import React,{useState} from "react"
import Form from "./Form"
import Table from "./table"
import './index.css'
import './abt.css'

function AdoptPage(){
    const [entries,setEntries] = useState([])

    const handleFormSubmit = (inputData) => {
        setEntries((prevEntries) => [...prevEntries,inputData])
    }
    return(
        <>
        <h1>Adopt a Pet</h1>
        <Form onSubmit={handleFormSubmit}/>
        <h1>Adoption Data</h1>
        <Table entries={entries} />
        <div className="aboutFooter">
            <p>&copy; 2024 Pet Adopt. All rights reserved.</p>
        </div>
        </>
    )
}

export default AdoptPage