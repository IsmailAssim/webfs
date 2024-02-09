import React, { useState, useEffect } from 'react';
import { Utilisateurs } from '../Config/Data';
import { useParams } from 'react-router-dom';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const { cin } = useParams();
    const utilisateur = Utilisateurs.find((u) => u.cin === cin);
    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, user: 'ismail' }]);
            setNewMessage('');
        }
    };

    return (
        <div>
            <h1>{utilisateur.nom}</h1>
            {messages.map((message, index) => (
                <div key={index}>
                    <strong>{message.user}:</strong> {message.text}
                </div>
            ))}
            <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
            <button onClick={handleSendMessage}>Envoyer</button>
        </div>
    );
};

export default Chat;
