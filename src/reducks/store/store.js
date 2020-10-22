import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {connectRouter,routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';

import {ProductsReducer} from '../products/reducers';
import {UserReducer} from '../users/reducers';

export default function createStore(history){
    return reduxCreateStore(
        combineReducers({
            products:ProductsReducer,
            users: UserReducer,
            router:connectRouter(history)
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )

}