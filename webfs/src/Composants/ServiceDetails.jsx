import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Updateetat } from '../Config/Serviceslice';
import { Utilisateurs } from '../Config/Data';

const ServiceDetails = () => {
  const { Titre } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const services = useSelector((state) => state.service);
  const service = services.find((s) => s.Titre === Titre);

  if (!service) {
    return <div>Service non trouvé</div>;
  }

  const HandleEtat = () => {
    dispatch(Updateetat(service.id));
    console.log(service.etat);
  };

  const utilisateurAssocie = Utilisateurs.find((u) => u.cin === service.cin);
  const handleContacter = () => {
    navigate(`/chat/${utilisateurAssocie.cin}`);
  };
  const handleSavoirPlus = () => {
    navigate(`/mon-profil/${utilisateurAssocie.cin}`);
  };
  return (
    <div>
      <h2>Titre : {service.Titre}</h2>
      <p>Description : {service.Description}</p>
      <p>Catégorie : {service.Catégorie}</p>
      <p>Tarif : {service.Tarif}</p>
      <p>Localisation : {service.Localisation}</p>
      {service.etat === 'intéresser' && (
        <button onClick={HandleEtat}>intéresser</button>
      )}
      {service.etat === 'En Attente' && (
        <button onClick={HandleEtat}>En Attente</button>
      )}
      {service.etat === 'Accepter' && (
        <button onClick={HandleEtat}>Accepter</button>
      )}
      <button onClick={handleSavoirPlus}>Savoir Plus</button>
      <button onClick={handleContacter}>Contacter</button>
    </div>
  );
};

export default ServiceDetails;
