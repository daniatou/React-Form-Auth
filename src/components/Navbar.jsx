import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'

export default function Navbar() {
    const { toggleModals } = useContext(UserContext)
    const navigate = useNavigate();

    const logOut = async () => {
        try {
            await signOut(auth)
            navigate('/')
        } catch {
            alert('Nous rencontrons quelques problèmes. Réessayer')
        }
    }


    return (
        <nav className='navbar   px-4'>
            <Link to="/" className='navbar-brand text-light'>
                Authentification
            </Link>

            <div>
                <button onClick={() => toggleModals('signUp')} className="btn btn-secondary">
                    Sign Up
                </button>
                <button onClick={() => toggleModals("signIn")} className="btn btn-secondary ms-2">
                    Sign In
                </button>
                <button onClick={logOut} className="btn btn-danger ms-2">
                    Log Out
                </button>
            </div>
        </nav>


    )
}
