import React, { useState } from 'react';
import { Catégories, Localisation, Titres } from '../Config/Data';
import { useDispatch, useSelector } from 'react-redux';
import { AddService } from '../Config/Serviceslice';

const Services = () => {
    const localisationOptions = Localisation.map((location) => (
        <option key={location} value={location}>
            {location}
        </option>
    ));

    const titreOptions = Titres.map((titre) => (
        <option key={titre} value={titre}>
            {titre}
        </option>
    ));

    const categorieOptions = Catégories.map((categorie) => (
        <option key={categorie} value={categorie}>
            {categorie}
        </option>
    ));

    const [Titre, setTitre] = useState('');
    const [Tarif, setTarif] = useState('');
    const [Loca, setLoca] = useState('');
    const [Catég, setCatég] = useState('');
    const [Description, setDescription] = useState('');
    const services = useSelector(state => state.service)
    console.log(services)
    const dispatch = useDispatch();

    const handleService = (e) => {
        e.preventDefault();
        const service = {
            Titre : Titre,
            Description : Description,
            Catégorie: Catég,
            Tarif : Tarif,
            Localisation: Loca,
        };
        dispatch(AddService(service));

        /*setTitre('');
        setTarif('');
        setLoca('');
        setCatég('');
        setDescription('');*/
    };
    return (
        <div>
            <form onSubmit={handleService}>
                <label htmlFor="titre">Titre</label>
                <br />
                <select id="titre" onChange={(e) => setTitre(e.target.value)} value={Titre}>
                    {titreOptions}
                </select>
                <br />
                <label htmlFor="categorie">Catégories</label>
                <br />
                <select id="categorie" onChange={(e) => setCatég(e.target.value)} value={Catég}>
                    {categorieOptions}
                </select>
                <br />
                <label htmlFor="localisation">Localisation</label>
                <br />
                <select id="localisation" onChange={(e) => setLoca(e.target.value)} value={Loca}>
                    {localisationOptions}
                </select>
                <br />
                <label htmlFor="tarif">Tarif</label>
                <br />
                <input type="text" id="tarif" onChange={(e) => setTarif(e.target.value)} value={Tarif} />
                <br />
                <label htmlFor="description">Description</label>
                <br />
                <input type="text" id="description" onChange={(e) => setDescription(e.target.value)} value={Description} />
                <br />
                <button type="submit">Ajouter service</button>
            </form>
        </div>
    );
};

export default Services;