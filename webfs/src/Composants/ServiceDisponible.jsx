import React from 'react';
import { Catégories, service } from '../Config/Data';
import { Link } from 'react-router-dom';

const ServiceDisponible = () => {
    return (
        <div>
            {Catégories.map((categorie) => (
                <div key={categorie}>
                    <h2>{categorie}</h2>
                    <div>
                        {service.filter((service) => service.Catégorie === categorie).map((service) => (
                            <div key={service.Titre}>
                                <Link to={`/ServiceDisponible/${service.Titre}`}>{service.Titre}</Link>

                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceDisponible;
