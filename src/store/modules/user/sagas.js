import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  updateProfileSucess,
  updateProfileFailured,
  updateImageSuccess,
  updateImageFailured,
  alteraFuncionamentoFailure,
  alteraFuncionamentoSuccess,
  updateConfiguracoesFailure,
  updateConfiguracoesSuccess,
  updateProfileWebSocketSuccess,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { id, estabelecimento, email, ...rest } = payload.data;

    const profile = Object.assign(
      { estabelecimento, email },
      rest.oldPassword ? rest : {}
    );
    const response = yield call(
      api.put,
      `estabelecimentos/${payload.data.id}`,
      payload.data
    );
    console.log(response.data);
    toast.success('Perfil atualizado com sucesso!');
    yield put(updateProfileSucess(response.data));
  } catch (err) {
    console.log(err);
    console.log(err.response);
    console.log(err.response.data);
    toast.error(err.response.data.erro);
    yield put(updateProfileFailured());
  }
}

export function* updateImagem({ payload }) {
  try {
    const { id, ...rest } = payload.data;
    const response = yield call(
      api.post,
      `estabelecimentos/${id}/imagem`,
      payload.data
    );
    toast.success(response.data.message);
    yield put(updateImageSuccess(response.data));
  } catch (err) {
    console.log(err.response);
    toast.error(err.response.data.erro);
    yield put(updateImageFailured());
  }
}


export function* alteraFuncionamento({payload}){
  try {
    console.log(payload.data);
    const response = yield call(api.post, `estabelecimentos/funcionamento`, payload.data)
    console.log(response.data)
    toast.success(response.data.message);
    yield put(alteraFuncionamentoSuccess(response.data))

  } catch (error) {
    console.log(error.response)
    toast.error("erro")
    yield put(alteraFuncionamentoFailure())

  }
}

export function* updateConfiguracoes({payload}){
  try {

    console.log(payload.data)
    const response = yield call (api.post, `estabelecimentos/configuracoes/${payload.data.profile.id}`, payload.data)
    console.log(response.data)
    toast.success(response.data.message)
    yield put(updateConfiguracoesSuccess(response.data))
    
  } catch (error) {
    console.log(error)
    console.log(error.response.data)
    toast.error(error.response.data.erro);
    yield put(updateConfiguracoesFailure())
    
  }
}


export function* updateProfileWebSocket({payload}){
  try {
    yield put(updateProfileWebSocketSuccess(payload.data))
    
  } catch (error) {
    console.log(error)
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_IMAGE_REQUEST', updateImagem),
  takeLatest('@user/ALTERA_FUNCIONAMENTO_REQUEST', alteraFuncionamento),
  takeLatest('@user/UPDATE_CONFIGURACOES_REQUEST', updateConfiguracoes),
  takeLatest('@user/UPDATE_PROFILE_WEBSOCKET_REQUEST', updateProfileWebSocket),
]);
