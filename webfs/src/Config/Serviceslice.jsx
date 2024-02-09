import { createSlice } from "@reduxjs/toolkit";
import { service } from "./Data";

export const serviceSlice = createSlice({
    name: 'service',
    initialState: service,
    reducers: {
        AddService: (state, action) => {
            const service = action.payload;
            state.push(service)
        },
        Updateetat: (state, action) => {
            const serviceToUpdateId = action.payload;
            const serviceToUpdate = state.find(service => service.id === serviceToUpdateId);

            if (serviceToUpdate) {
                if (serviceToUpdate.etat === 'intéresser') {
                    serviceToUpdate.etat = 'En Attente';
                } else if (serviceToUpdate.etat === 'En Attente') {
                    serviceToUpdate.etat = 'Accepter';
                }
            }
        },
    },
});

export const serviceReducer = serviceSlice.reducer;
export const { Updateetat, AddService } = serviceSlice.actions