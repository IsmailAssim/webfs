import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ModifierUser } from '../Config/Userslice';
import { useParams } from 'react-router-dom';
import { Utilisateurs } from '../Config/Data';

const Profil = () => {
    const { id } = useParams();
    if (!id) {
        return (
            <div>
                <h3>On n'a pas l'ID. Veuillez passer par Mon Profil puis mettre à jour le profil.</h3>
            </div>
        );
    }
    const userUpdate = Utilisateurs.find((u) => u.id == id);
    const dispatch = useDispatch();

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [cin, setCin] = useState('');
    const [numTel, setNumTel] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [error, setError] = useState('');

    const handleProfil = (e) => {
        e.preventDefault();

        // Validation des champs (décommentez si nécessaire)
        /*
        if (!nom || !prenom || !cin || !numTel || !email || !password) {
            setError('Veuillez remplir tous les champs.');
            return;
        }
        */

        const updatedUser = {
            id: id,
            nom: nom,
            prenom: prenom,
            cin: cin,
            numTel: numTel,
            email: email,
            password: password,
            dateNaissance: dateNaissance,
            address: address,
        };

        console.log(updatedUser);
        dispatch(ModifierUser(updatedUser));

        // Réinitialisation des champs (décommentez si nécessaire)
        /*
        setNom('');
        setPrenom('');
        setCin('');
        setNumTel('');
        setEmail('');
        setPassword('');
        setDateNaissance('');
        setAddress('');
        setError('');
        */
    }

    return (
        <div>
            <form action="" onSubmit={handleProfil}>
                <label htmlFor="nom">Nom</label><br />
                <input type="text" name='nom' value={userUpdate.nom} onChange={(e) => setNom(e.target.value)} /><br />

                <label htmlFor="prenom">Prénom</label><br />
                <input type="text" name='prenom' value={userUpdate.prenom} onChange={(e) => setPrenom(e.target.value)} /><br />

                <label htmlFor="cin">CIN</label><br />
                <input type="text" name='cin' value={userUpdate.cin} onChange={(e) => setCin(e.target.value)} /><br />

                <label htmlFor="numTel">Numéro de téléphone</label><br />
                <input type="number" name='numTel' value={numTel} onChange={(e) => setNumTel(e.target.value)} /><br />

                <label htmlFor="email">Adresse e-mail</label><br />
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                <label htmlFor="password">Mot de passe</label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />

                <label htmlFor="address">Address</label><br />
                <input type="text" name='address' value={address} onChange={(e) => setAddress(e.target.value)} /><br />

                <label htmlFor="date_naissance">Date de naissance</label><br />
                <input type="date" name='date_naissance' value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} /><br />

                {error && <p style={{ color: 'red' }}>{error}</p>}<br />
                <button type='submit'>Mettre à jour</button><br />
            </form>
        </div>
    );
};

export default Profil;
