import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom';

export default function SignUpModal() {

    const navigate = useNavigate()

    const { modalState, toggleModals, signUp } = useContext(UserContext);
  
    const [validation, setValidation] = useState("");

    const inputs = useRef([])

    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }


    const formRef = useRef();


    const handleForm = async (e) => {
        e.preventDefault()
        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
            setValidation("Entrez un mot de passe de minimum 6 caractères")
            return;
          }
          else if(inputs.current[1].value !== inputs.current[2].value) {
            setValidation("Entrez le même mot de passe")
            return;
          }

          try{
            await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            )
            formRef.current.reset();
            setValidation("")
            toggleModals('close')
            navigate('/private/private-home')


          } catch(err){
           if(err.code === 'auth/invalid-email'){
            setValidation('Le format de votre email est invalide')
           }
           if(err.code === 'auth/email-already-in-use'){
            setValidation('Cet email existe déja')
           }

          }
    }

    const closeModal = () => {
        setValidation('')
        toggleModals('close')
    }


    return (
        <>
            {modalState.signUpModal && (

                <div className="position-fixed top-O vw-100 vh-100">
                    <div onClick={ closeModal} className="w-100 h-100 bg-dark bg-opacity-75"></div>
                    <div className="position-absolute top-50 start-50 translate-middle " style={{ minWidth: '500px' }}>
                        <div className="modal-dialog bg-light p-6 rounded-2" role="document">
                            <div className="modal-content">
                                <div className="modal-header px-2">
                                    <h5 className="modal-title">Sign Up</h5>
                                    <button onClick={ closeModal} className='btn-close m-3 p-2'></button>
                                </div>
                                <div className="modal-body ">
                                    <form className="sign-up-form" onSubmit={handleForm} ref = {formRef}>
                                        <div className="mb-3">
                                            <label htmlFor="SignUpEmail">Email Adress</label>
                                            <input
                                             ref = {addInputs}
                                             type="email" className='form-control' name="email" id="signUpEmail" required placeholder='Email' />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="SignUpPwd">Password</label>
                                            <input
                                              ref = {addInputs}
                                             type="password" className='form-control' name="password" id="signUpPwd" required placeholder='Password' />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="SignUpPwd">Reapeat Password</label>
                                            <input
                                              ref = {addInputs}
                                             type="password" className='form-control' name="password" id="repeatPwd" required placeholder='Repeat Password' />
                                            <p className='text-danger mt-1'>{validation}</p>
                                        </div>

                                        <button className="btn btn-primary">Submit</button>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}
