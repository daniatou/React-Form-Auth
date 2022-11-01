import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import vector from './Vector.jpg'


export default function Home() {
  const { currentUser, toggleModals } = useContext(UserContext)


  return (
    <div className='container p-5'>
      <h1 className='display-2 text-light' >
        {currentUser ? 'Welcome' :
          <div className='container-fluid d-flex '>
            <div className=" w-50 p-5">
              <h1 className='display-5 fw-bold'>
                WELCOME TO MY  REACT APP
              </h1>
              <p className='fs-6 text '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus. Expedita eveniet rem, hic nam corrupti quaerat? Sit cupiditate iusto placeat veniam incidunt accusamus illo! Repellat facilis quisquam dolorum fuga.
              </p>
              <button onClick={() => toggleModals("signIn")} className="btn btn-secondary  ">
                Sign In
            </button>
            </div>

            <div className="logo-backg w-50 p-5">
              <img className='w-100 rounded-3' src={vector} alt="Logo Background" />
            </div>
          </div>
        }
      </h1>

    </div>
  )
}
