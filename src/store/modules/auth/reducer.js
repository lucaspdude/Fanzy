import produce from 'immer';

const INICIAL_STATE = {
    signed: false,
    loading: false,
    token: null,
    profile: false
};

export default function auth(state = INICIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGN_IN_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@auth/SIGN_IN_SUCESS': {
                draft.profile = action.payload.data;
                draft.signed = true;
                break;
            }

            case '@auth/SIGN_FAILURED': {
                draft.loading = false;
                draft.profile = null;
                draft.signed = false;
                break;
            }

            case '@auth/SIGNOUT': {
                draft.token = null;
                draft.signed = false;
                break;
            }






            case '@auth/RESET_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@auth/RESET_SUCCESS': {
                draft.token = action.payload.token;
                draft.loading = false;
                break;
            }

            case '@auth/RESET_FAILURED': {
                draft.loading = false;
                draft.token = null;
                break;
            }
            default:
        }
    });
}
