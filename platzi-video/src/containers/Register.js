import React from 'react'
import './../assets/styles/components/Register.scss'
import {Link} from 'react-router-dom'

function Register() {
    return (
        <section className="register">
            <section className="register__container">
                <h2>Registrarse</h2>
                <form className="register__container--form">
                    <input className="input" type="text" placeholder="Nombre"/>
                    <input className="input" type="text" placeholder="Correo"/>
                    <input className="input" type="password" placeholder="Contraseña"/>
                    <button className="button">Registrarse</button>
                </form> 
                <Link to='/login'>
                <p>Iniciar sesión</p>
                </Link>
            </section>
        </section>
    )
}

export default Register
