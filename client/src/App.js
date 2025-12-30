import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './common/Layout';
import { useState } from 'react';
import TasksList from './tasks/TasksList'
import AddTask from './tasks/AddTask'
import CardAddTask from "./tasks/CardAddTask"
import PostsList from './posts/PostsList';
import AddPost from './posts/AddPost';
import PhotosList from "./photos/PhotosList"
import UsersList from "./users/UsersList"


function App() {
  return (<div>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<h1>home page</h1>}/>
          <Route path='tasks' element={<TasksList />}/>
          <Route path='tasks/add' element={<CardAddTask />}/>
          <Route path='posts' element={<PostsList />}/>
          <Route path='posts/add' element={<AddPost />}/>
          <Route path='photos' element={<PhotosList />}/>
          <Route path='users' element={<UsersList />}/>
        </Route>
      </Routes>
    </Router>
  </div>);
}

export default App;
