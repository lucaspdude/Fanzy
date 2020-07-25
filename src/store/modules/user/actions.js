export function updateProfileRequest(data) {
    return {
        type: '@user/UPDATE_PROFILE_REQUEST',
        payload: { data },
    };
}

export function updateProfileSucess(profile) {
    return {
        type: '@user/UPDATE_PROFILE_SUCESS',
        payload: { profile },
    };
}

export function updateProfileFailured() {
    return {
        type: '@user/UPDATE_PROFILE_FAILURED',
    };
}



export function updateImageRequest(data) {
  return {
      type: '@user/UPDATE_IMAGE_REQUEST',
      payload: { data },
  };
}

export function updateImageSuccess(data) {
  return {
      type: '@user/UPDATE_IMAGE_SUCCESS',
      payload: { data },
  };
}

export function updateImageFailured() {
  return {
      type: '@user/UPDATE_IMAGE_FAILURED',
  };
}

export function alteraFuncionamentoRequest(data){
    return {
        type: '@user/ALTERA_FUNCIONAMENTO_REQUEST',
        payload: {data}
    }
}

export function alteraFuncionamentoSuccess(data){
    return {
        type: '@user/ALTERA_FUNCIONAMENTO_SUCCESS',
        payload: {data}
    }
}
export function alteraFuncionamentoFailure(){
    return {
        type: '@user/ALTERA_FUNCIONAMENTO_FAILURE',
        payload: {}
    }
}


export function updateConfiguracoesRequest(data) {
    return {
      type: '@user/UPDATE_CONFIGURACOES_REQUEST',
      payload: {data},
    };
  }
  
  export function updateConfiguracoesSuccess(data) {
    return {
      type: '@user/UPDATE_CONFIGURACOES_SUCCESS',
      payload: { data },
    };
  }
  
  export function updateConfiguracoesFailure() {
    return {
      type: '@user/UPDATE_CONFIGURACOES_FAILURE',
      payload: { },
    };
  }



  // Websocket update Profile
  export function updateProfileWebSocketRequest(data){
    return {
      type: '@user/UPDATE_PROFILE_WEBSOCKET_REQUEST',
      payload: {data}
    }
  }
  export function updateProfileWebSocketSuccess(data){
    return {
      type: '@user/UPDATE_PROFILE_WEBSOCKET_SUCCESS',
      payload: {data}
    }
  }