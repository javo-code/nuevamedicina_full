import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './login.css'

export default function Login() {
    return (
            <section className='login-section'>
                <div className="login-container">
                    <div className='form'>
                        <form action="#">
                        <h2>Iniciar Sesion</h2>

                        <div className="login-input-container">
                            <FontAwesomeIcon icon={faEnvelope} className='login-icon'/>
                            <input type="email" required />
                            <label htmlFor="#">Email</label>
                        </div>

                        <div className="login-input-container">
                            <FontAwesomeIcon icon={faLock} className='login-icon'/>
                            <input type="password" required />
                            <label htmlFor="#">Contraseña</label>
                        </div>

                        <div className="olvidar">
                            <label htmlFor="#">       
                                <input type="checkbox" /> Recordar │
                                <a href="../../App.js"> Olvidé mi contraseña</a>
                            </label>
                        </div>
                        </form>
                        <div className='login-btn-container'>
                            <button className='login-btn'>Acceder</button>
                            <div className="registrar">
                                <p>No tengo Cuenta <a href="../../App.js">Crear una</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    )
}