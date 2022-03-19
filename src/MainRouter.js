import React,{Component} from 'react'
import { Routes,Route} from 'react-router-dom'
import {Home} from './core/Home'
import {Menu} from './core/Menu'
import {BurguerMenu} from '../src/core/BurguerMenu'
import ClassRoom from './core/ClassRoom'
/*
import Users from './user/Users'
import Example from './user/Example'
import SignUpA from './user/SignUpA'
import Usejl from './user/Usejl'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Profile from './user/Profile'
import EditProfile from './user/EditPofile'
import PrivateRoute from './auth/PrivateRoute'
import ClassRoom from './user/ClassRoom'
*/



const MainRouter = () =>{
        return (
            <div>

            {<Menu/>}    
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path='/classroom' element={<ClassRoom></ClassRoom>}></Route>                                         
                    
{/*                 <Route exact path="/use" component={Usejl}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/signup_b" component={SignUpA}/>
                    <Route exact path="/signin" component={Signin}></Route>
                    <Route exact path="/user/:userId" component={Profile}></Route>
                    <Route exact path="/classroom" component={ClassRoom}></Route>
                    <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>*/}
                </Routes>

            </div>
        )
    }


export default MainRouter