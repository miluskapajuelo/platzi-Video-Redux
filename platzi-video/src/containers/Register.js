import React, {useState} from 'react'
import './../assets/styles/components/Register.scss'
import {Link} from 'react-router-dom'
import {registerRequest} from './../actions'
import {connect} from 'react-redux'
import { useNavigate } from "react-router-dom";

function Register(props) {
    const navigate = useNavigate();
    const [form, setValues]= useState({
        name: '',
        email:'',
        password:''
    })

    const handleOnChange = event =>{
        setValues({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit =event=>{
        event.preventDefault()
        props.registerRequest(form)
        navigate('/login')

    }
    return (
        <section className="register">
            <section className="register__container">
                <h2>Registrarse</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input 
                    name='name'
                    className="input" 
                    type="text" 
                    placeholder="Nombre"
                    onChange={handleOnChange}
                    />
                    <input 
                    name='email'
                    className="input" 
                    type="text" 
                    placeholder="Correo"
                    onChange={handleOnChange}
                    />
                    <input 
                    name='password'
                    className="input" 
                    type="password" 
                    placeholder="Contraseña"
                    onChange={handleOnChange}
                    />
                    <button className="button">Registrarse</button>
                </form> 
                <Link to='/login'>
                <p>Iniciar sesión</p>
                </Link>
            </section>
        </section>
    )
}

const mapDispatchToProps ={
    registerRequest
}

export default connect(null,mapDispatchToProps )(Register)