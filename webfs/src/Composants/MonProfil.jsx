import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Utilisateurs } from '../Config/Data';

const MonProfil = () => {
    const { cin } = useParams();
    const utilisateur = Utilisateurs.find((u) => u.cin === cin);
    const navigate = useNavigate();

    if (!utilisateur) {
        return <div>Utilisateur non trouvé</div>;
    }

    const handleAjouterService = () => {
        navigate('/service');
    };

    return (
        <div>
            <h2>Mon Profil</h2>
            <p>Nom: {utilisateur.nom}</p>
            <p>Prénom: {utilisateur.prenom}</p>
            <p>Email: {utilisateur.email}</p>
            <p>numTel: {utilisateur.numTel}</p>
            <p>address: {utilisateur.address}</p>
            <Link to={`/profil/${utilisateur.id}`}>Mettre à jour profil</Link>
            <button onClick={handleAjouterService}>Ajouter service</button>
        </div>
    );
};

export default MonProfil;
