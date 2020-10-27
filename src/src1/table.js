import React from 'react'
import Tableheader from './thead.js'
import Tablefooter from './tbody.js'
function table(props){
    const users = [
        {
            name:'shaswat',
            lname:'vashistha',
            age:20
        },
        {
            name:'triyank',
            lname:'jain',
            age:22
        },
        {
            name:'rajat',
            lname:'pandey',
            age:24
        }
      ];
    const header={
        name:'name',
        lname:'lastname',
        age:'age'
    }  
    return(
        <table>
            <Tableheader name={header}/>
            <Tablefooter users={users} />
        </table>
    )
}
export default table;