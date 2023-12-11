import {Routes, Route} from 'react-router-dom';
import './globals.css';

import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Home, Chat, Post, UpdatePost, Profile, UpdateProfile, Others } from './_root/pages';


const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/signin" element={<SigninForm />} />
                <Route path="/signup" element={<SignupForm />} />
            </Route>

            <Route element={<RootLayout/>}>
                <Route index element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/post" element={<Post />} />
                <Route path="/updt-post/:id" element={<UpdatePost />} />
                <Route path="/postdets/:id" element={<UpdatePost />} />
                <Route path="/profile/:id/*" element={<Profile />} />
                <Route path="/updt-profle/:id" element={<UpdateProfile />} />
                <Route path="/others" element={<Others />} />
            </Route>
        </Routes>
    </main>
  )
}

export default App