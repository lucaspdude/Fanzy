import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { signInSucess, signFailure, resetSucess, resetFailure } from './actions';

import firebase from 'firebase/app';
import 'firebase/auth'
import { googleFirebaseSignIn } from '~/services/firebase.utils';


export function* signIn({ payload }) {
    try {
        yield put(signInSucess(payload.data))
        history.push('/dashboard')   
    } catch (error) {
        yield put(signFailure())
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;
        yield call(api.post, '/users', {
            name,
            email,
            password,
            provider: true,
        });
        toast.success('Conta criada com Sucesso, Faça Login');
        history.push('/');
    } catch (err) {
        toast.error('Falha na criação, verifique seus dados');
        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function signOut() {
    history.push('/');
}




// Reset password

export function* resetPassword({ payload }) {
    try {
        const response = yield call(api.post, '/criareset', payload.data)
        toast.success(response.data.mensagem)
        yield put(resetSucess(response.data.token))
    } catch (err) {
        toast.error(err.response.data.mensagem);
        yield put(resetFailure());

    }
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGNOUT', signOut),
    takeLatest('@auth/RESET_REQUEST', resetPassword),
]);
