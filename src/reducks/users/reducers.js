import * as Actions from './actions';
import initialState from  '../store/initialState';

export const UserReducer = (state = initialState.users,action) => {
    switch(action.type){
        case Actions.SIGN_IN:
            return {
                //ここで展開されないオブジェクトは消えてしまう。
                ...state,
                ...action.payload
            }
        case Actions.SIGN_OUT:
            return {
                ...action.payload
            }
        default:
            return state
    }
}