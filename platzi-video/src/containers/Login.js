import React from 'react'

function Login() {
    return (
        <section className="login">
            <section className="login__container">
                <h2>Iniciar sesión</h2>
                <form className="login__container--form">
                    <input className="input" type="text" placeholder="Correo"/>
                    <input className="input" type="password" placeholder="Contraseña"/> 
                    <button className="button"> Iniciar sesión</button> 
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox"> Recuerdame</input>
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>  
                </form>
            </section>
        </section>
    )
}

export default Login
