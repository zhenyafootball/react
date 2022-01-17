
import css from "./App.module.css";
import Users from "./components/Users/Users";
import UsersDetail from "./components/UsersDetail/UsersDetail";
import Posts from "./components/Posts/Posts";
import {useState} from "react";
import {postService} from "./services/post.service";

const  App =() => {
    const [user,setUser] = useState(null)

    const[posts,setPosts]= useState([])
    const getUser = (user) => {
        setUser(user)
        setPosts([])

    }

    const getUserId = (id) => {
        postService.getByUserId(id).then(value => setPosts([...value]))

    }
  return (
    <div>
      <div className={css.wrap}>
        <Users getUser={getUser}/>
          {user &&<UsersDetail user={user} getUserId={getUserId}/>}
      </div>
        {!!posts.length &&<Posts posts={posts}/>}
    </div>
  );
}

export default App;
