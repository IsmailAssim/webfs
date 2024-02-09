import React from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link><br />
            <Link to={'/inscription'}>inscription</Link><br />
            <Link to={'/profil'}>profil</Link><br />
            <Link to={'/service'}>service</Link><br />
            <Link to={'/ServiceDisponible'}>ServiceDisponible</Link><br /><br />
        </div>
    );
};

export default Header;