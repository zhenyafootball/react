
import './App.css';
import Users from "./components/users";
import Posts from "./components/posts";
import Comments from "./components/comments";

function App() {

    return (
        <div>
            <div className="users">
        <Users/>
            <Posts/>
            </div>
            <Comments/>
        </div>
    )
}

export default App;
