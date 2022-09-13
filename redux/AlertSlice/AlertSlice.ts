import { AlertType } from '@/config/Enums/AlertType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export interface InitialState {
  initialAlerts: Alert[];
  error: string;
}

export interface Alert {
  id?: string;
  message: string;
  type: AlertType;
}

export const initialState: InitialState = {
  initialAlerts: [],
  error: '',
};
const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    createAlert(state, action: PayloadAction<Alert>) {
      const alert: Alert = {
        id: action.payload.id ?? Date.now().toString(),
        message: action.payload.message,
        type: action.payload.type,
      };
      state.initialAlerts.push(alert);
    },
    removeAlert(state, action: PayloadAction<Alert>) {
      const index = state.initialAlerts.findIndex((alert: Alert) => alert?.id === action.payload.id);
      const updatedAlerts = [...state.initialAlerts];
      updatedAlerts.splice(index, 1);
      state.initialAlerts = updatedAlerts;
    },
  },
});

export const selectAllAlerts = (state: RootState) => state.alert.initialAlerts;
export const { createAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
