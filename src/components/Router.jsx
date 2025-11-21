import Counter from './Counter'
import Users from './Users'
import UserProfile from './UserProfile'
import {  Route, Routes } from 'react-router-dom'
import ErrorPage from './404'
import Greeting from './Greeting'

const HelloRouter =()=> {

    return (
            <Routes>
            <Route path='/' element={<Greeting name="Samuel" />} />
            <Route path='/users/profile' element={<UserProfile />} />
            <Route path='/users' element={<Users/>} />
            <Route path='/counter' element={<Counter/>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
    )
}

export default HelloRouter;

     