import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const Navbar = () => {
    const {logout, isLogin} = useContext(AuthContext)

    return (
        <div>
            { isLogin ?
                <button onClick={() => logout()}>out</button>
                :
                <>
                    <NavLink to='/login' >login</NavLink>
                    <NavLink to='/reg' >reg</NavLink>
                </>
            }

        </div>
    );
};

export default Navbar;