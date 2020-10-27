import React from 'react'
function Table(props){
  let header=props.name
    return(
        <thead>
          <th>{header.name}</th>
          <th>{header.lname}</th>
          <th>{header.age}</th>
        </thead>
    )
}
export default Table;