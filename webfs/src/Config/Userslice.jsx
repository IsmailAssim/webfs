import { createSlice } from "@reduxjs/toolkit";
import { Utilisateurs } from "./Data";
import { useNavigate } from "react-router-dom";

const userslice = createSlice({
    name: 'user',
    initialState: Utilisateurs,
    reducers: {
        Addusers: (state, action) => {
            state.push(action.payload);
        },
        ModifierUser: (state, action) => {
            const { id, nom, prenom, cin, numTel, email, password, date_naissance, address } = action.payload;
            const userToUpdate = state.find(user => user.id === id);

            if (userToUpdate) {

                userToUpdate.nom = nom;
                userToUpdate.prenom = prenom;
                userToUpdate.cin = cin;
                userToUpdate.numTel = numTel;
                userToUpdate.email = email;
                userToUpdate.password = password;
                userToUpdate.date_naissance = date_naissance;
                userToUpdate.address = address;
            }
        },
        ChekLogin: (state, action) => {
            const { email, password } = action.payload.loginData;
            const chekLogin = state.find((user) => user.email === email && user.password === password);

            if (chekLogin) {
                // Redirection vers la page du profil avec le numéro de cin dans l'URL
                action.payload.navigate(`/mon-profil/${chekLogin.cin}`);
            }
        },
    }
});

export const userReducer = userslice.reducer;
export const { ModifierUser, Addusers, ChekLogin } = userslice.actions;
