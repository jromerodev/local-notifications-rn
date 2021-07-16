import { ThunkAction, Action, Dispatch, AnyAction } from '@reduxjs/toolkit';
//import { rootReducer } from '../store';

export interface SessionState {
	deviceToken: string;
	requestLoginNotification: boolean;
}

export interface NotificationPayload {
	id: string;
}
