import React from 'react'
function Table2(props){
  const user=props.users;
  const map=user.map((ele)=>(
//use user in code for multiple users
    <tbody>
      <td>{ele.name}</td>
      <td>{ele.lname}</td>
      <td>{ele.age}</td>
      </tbody>
  ))
  return(
    <>
    {map}
    </>
  )
  
  }
export default Table2;
