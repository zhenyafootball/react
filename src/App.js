
import './App.css';
import {useEffect, useState} from "react";

function App() {

    let [users,setUsers] = useState([]);
    let [posts,setPosts] = useState([]);
    let [comments,setComments] = useState([]);

   useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(value => value.json())
          .then(value => {
                 setUsers(value);
          })

       fetch(`https://jsonplaceholder.typicode.com/posts`)
           .then(value => value.json())
           .then(value => {
               setPosts(value);

           })

       fetch(`https://jsonplaceholder.typicode.com/comments`)
           .then(value => value.json())
           .then(value => {
               setComments(value)

           })
   }, []);
    return (
        <div>
            <div className="user">
         <ul>
             {
             users.map(value => <li key={value.id}> {value.name}</li>)
             }
         </ul>

            <ul>
                {
                posts.map(value => <li key={value.id}> {value.title}</li>)
                }
            </ul>
            </div>
            <ul>
                {
                comments.map(value => <li key={value.id}> {value.body}</li>)
                }
            </ul>
        </div>
    )
}

export default App;
