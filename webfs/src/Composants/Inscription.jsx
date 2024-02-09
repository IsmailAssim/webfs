import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addusers } from '../Config/Userslice';
import { Link } from 'react-router-dom';
const Inscription = () => {
    const dispatch = useDispatch();
    const [currentID, setCurrentID] = useState(1);
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [cin, setCin] = useState('');
    const [numTel, setNumTel] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');
    //const user = useSelector(state => state.user);
    //console.log(user)
    const handleInscription = (e) => {
        e.preventDefault();

        /*if (!nom || !prenom || !cin || !numTel || !email || !password) {
            setError('Veuillez remplir tous les champs.');
            return;
        }*/

        const newUser = {
            id: currentID,
            nom: nom,
            prenom: prenom,
            cin: cin,
            numTel: numTel,
            email: email,
            password: password,
        };
        console.log(newUser)
        dispatch(Addusers(newUser));
        setCurrentID(currentID + 1);

        /*setNom('');
        setPrenom('');
        setCin('');
        setNumTel('');
        setEmail('');
        setpassword('');
        setError('');*/
    };

    return (
        <div className='Inscription'>
            <form onSubmit={handleInscription}>
                <label htmlFor="nom">Nom</label><br />
                <input type="text" name='nom' value={nom} onChange={(e) => setNom(e.target.value)} /><br />

                <label htmlFor="prenom">Prénom</label><br />
                <input type="text" name='prenom' value={prenom} onChange={(e) => setPrenom(e.target.value)} /><br />

                <label htmlFor="cin">CIN</label><br />
                <input type="text" name='cin' value={cin} onChange={(e) => setCin(e.target.value)} /><br />

                <label htmlFor="numTel">Numéro de téléphone</label><br />
                <input type="number" name='numTel' value={numTel} onChange={(e) => setNumTel(e.target.value)} /><br />

                <label htmlFor="email">Adresse e-mail</label><br />
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                <label htmlFor="password">Mot de passe</label><br />
                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} /><br />

                {error && <p style={{ color: 'red' }}>{error}</p>}<br />

                <button type='submit'>S'inscrire</button><br />
                <Link to={'/login'}>J'ai deja un compte</Link>
            </form>
        </div>
    );
};

export default Inscription;
