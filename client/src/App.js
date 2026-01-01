import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./common/Nav"
import TasksList from './tasks/TasksList'
import PostsList from './posts/PostsList';
import PhotosList from "./photos/PhotosList"
import UsersList from "./users/UsersList"


function App() {
  return (<div>
    <Router>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<h1>home page</h1>}/>
          <Route path='tasks' element={<TasksList />}/>
          <Route path='posts' element={<PostsList />}/>
          <Route path='photos' element={<PhotosList />}/>
          <Route path='users' element={<UsersList />}/>
        </Route>
      </Routes>
    </Router>
  </div>);
}

export default App;
