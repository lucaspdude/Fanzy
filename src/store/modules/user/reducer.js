import produce from 'immer';

const INICIAL_STATE = {
    profile: null,
    action: null,
    aberto: null,
};

export default function user(state = INICIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {

            case '@user/UPDATE_PROFILE_SUCESS': {
                draft.profile = action.payload.profile.data;
                break;
            }
            case '@auth/SIGNOUT': {
                draft.profile = null;
                break;
            }


            case '@user/UPDATE_IMAGE_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@user/UPDATE_IMAGE_SUCCESS': {
                draft.action = action.payload.data.media[0].updated_at;
                draft.loading = false;
                break;
            }

            case '@user/UPDATE_IMAGE_FAILURED': {
                draft.loading = false;
                break;
            }

            case '@user/ALTERA_FUNCIONAMENTO_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@user/ALTERA_FUNCIONAMENTO_SUCCESS': {
                draft.aberto = action.payload.data.estabelecimento.aberto;
                draft.profile = action.payload.data.estabelecimento;
                draft.loading = false;
            }

            case '@user/ALTERA_FUNCIONAMENTO_FAILURE': {
                draft.aberto = null;
                draft.loading = false;
            }

            case '@user/UPDATE_CONFIGURACOES_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@user/UPDATE_CONFIGURACOES_SUCCESS': {
                draft.loading = false;
                draft.profile = action.payload.data.estabelecimento;
                break;
            }

            case '@user/UPDATE_CONFIGURACOES_FAILURE': {
                draft.loading = false;
                break;
            }


            case '@user/UPDATE_PROFILE_WEBSOCKET_REQUEST': {

                break;
            }

            case '@user/UPDATE_PROFILE_WEBSOCKET_SUCCESS': {
                draft.profile = action.payload.data;
                break;
            }

            default:
        }
    });
}
