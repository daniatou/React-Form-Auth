import React, {useContext} from 'react'
import { UserContext } from '../context/userContext'


export default function Home() {
  const {currentUser} = useContext(UserContext)


  return (
    <div className='container p-5'>
        <h1 className='display-2 text-light' >
          {currentUser? 'Welcome': '  Hello, Sign In or Sign Up' }
        </h1>
    </div>
  )
}
