import React , { useState } from "react"

function Form({onSubmit}){
    const [inputData,setInputData] = useState({
        name : "",
        type : "",
        breed : "" ,
        customer : "",
        email : "" ,
        number : "" ,
    })

    const handleValue = (event) => {
        const {name,value} = event.target
        setInputData((prevData) =>({
            ...prevData,
            [name]:value
        }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(inputData)
        setInputData({
            name : "",
            type : "",
            breed : "" ,
            customer : "",
            email : "" ,
            number : "" ,
        })
    }
    
    return(
        <form onSubmit={handleSubmit}>
        <div className="formElements">
            <h3>Pet Name</h3>
            <input value={inputData.name}
            onChange={handleValue} 
            type="text" 
            placeholder="Enter Pet Name"
            name="name"/>

            <h3>Pet Type</h3>
            <select value ={inputData.type}
            onChange={handleValue}
            name="type">
                <option value="">Select Pet Type</option>
                <option value="Dog">Dog</option>
                <option value="cCat">Cat</option>
                <option value="Bird">Bird</option>
            </select>

            <h3>Pet Breed</h3>
            <input value={inputData.breed}
            onChange={handleValue}
            placeholder="Enter Pet's Breed"
            name="breed"
            type="text" />

            <h3>Your Name</h3>
            <input value={inputData.customer} 
            onChange={handleValue} 
            placeholder="Enter Your Name" 
            name="customer"
            type="text" />

            <h3>Your Email</h3>
            <input value={inputData.email}
            onChange={handleValue}
            placeholder="Enter Your Email"
            name="email"
            type="text" />

            <h3>Your Phone Number</h3>
            <input value={inputData.number} 
            onChange={handleValue} 
            placeholder="Enter Your Number" 
            name="number"
            type="text" />
            <br />
            <br />
            <button type="submit">Submit</button>
        </div>
        </form>
        
    )
}

export default Form