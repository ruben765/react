import React from "react"
import {Link, NavLink} from 'react-router-dom'
import {auth} from '../firebase'
import { withRouter } from "react-router-dom"

const Navbar = (props) => {

     const cerrarSesion = () => {
         auth.signOut()
         .then(() => {
            props.history.push('/login')
         })
     }

    return (
        <div className="navbar navbar-dark bg-dark">
           <Link to="/" className="navbar-brand">React Admin</Link>
           <div>
               <div className="d-flex">
                   <NavLink 
                       className="btn btn-dark mr-2" 
                       to="/" 
                       exact
                    >
                        Inicio
                   </NavLink>
                   {
                    props.firebaseuser !== null ? (
                        <NavLink 
                            className="btn btn-dark mr-2" 
                            to="/admin"
                        >
                           Admin
                        </NavLink>
                       ) : null       
                    }
                    {
                        props.firebaseuser !== null ? (
                            <button 
                                className="btn btn-dark"
                                onClick={() => cerrarSesion()}
                            >
                                cerrar sesion
                            </button>
                        ) : (
                          <NavLink 
                          className="btn btn-dark mr-2" 
                          to="/login"
                        >
                        Login
                    </NavLink>
                   )
                } 
                </div>
            </div>
        </div>
    )
}

export default withRouter (Navbar)
