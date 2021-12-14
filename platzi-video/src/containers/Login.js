import React,{useState} from 'react'
import './../assets/styles/components/Login.scss'
import googleIcon from './../assets/static/google-icon.png'
import twitterIcon from './../assets/static/twitter-icon.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginRequest} from './../actions'
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const [form, setValues] = useState({
        email: ''
    })

    const handleInput=event=>{
        setValues({
            ...form, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit= e =>{
        e.preventDefault()
        props.loginRequest(form)
        navigate('/')
    }

    return (

        <section className="login">

            <section className="login__container">
                <h2>Iniciar sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input 
                    name="email"
                    className="input" 
                    type="text" 
                    placeholder="Correo"
                    onChange={handleInput} />
                    <input 
                    name="password"
                    className="input" 
                    type="password" 
                    placeholder="Contraseña"
                    onChange={handleInput} />
                    <button className="button"> Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox" /> 
                            Recuerdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                     <div><img src={googleIcon} alt="google"/>Inicia sesión con Google</div>
                     <div><img src={twitterIcon} alt="twitter"/>Inicia sesión con Twitter</div>
                 </section>
                 <p className="login__container--register">No tienes ninguna cuenta <Link to='/register'>Ingresa aquí</Link></p>
          
            </section>
            
        </section>
    )
}

const mapDispatchToProps = {
    loginRequest
}

export default connect(null,mapDispatchToProps )(Login)
