import React from "react"

 function Table({entries}){
    return(
        <>
        <table border="" cellPadding={10}>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Parent Name</th>
              <th>Parent Email</th>
              <th>Parent Number</th>
            </tr>
          </thead>
          <tbody>
    
        {entries.map((entry,index) => (
          <tr key={index}>
            <td>{entry.name}</td>
            <td>{entry.type}</td>
            <td>{entry.breed}</td>
            <td>{entry.customer}</td>
            <td>{entry.email}</td>
            <td>{entry.number}</td>
          </tr>
        ))}
        
            </tbody>
          </table>
        </>
    )
}

export default Table