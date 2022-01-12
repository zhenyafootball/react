import {useEffect, useState} from "react";

export default function Users () {

    const [users,setUsers] = useState([]);
        useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/users`)
                .then(value => value.json())
                .then(value => {
                    setUsers(value);
                })
                },  []  )
            return(
            <div>
                <ul>
                    {
                        users.map(value => <li key={value.id}> {value.name}</li>)
                    }
                </ul>

            </div>
        )
        }
