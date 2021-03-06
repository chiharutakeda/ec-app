export const FETCH_PRODUCTS_IN_CART = "FETCH_PRODUCTS_IN_CART";
export const fetchProductsInCartAction = (products) =>{
    return {
        type : "FETCH_PRODUCTS_IN_CART",
        payload : products
    }
};

export const FETCH_ORDER_HISTORY = "FETCH_ORDER_HISTORY";
export const fetchOrderHistoryAction = (history) =>{
    return {
        type : "FETCH_ORDER_HISTORY",
        payload : history
    }
};

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) =>{
    return {
        type : "SIGN_IN",
        payload : {
            email:userState.email,
            isSignedIn : true,
            role: userState.role,
            uid : userState.uid,
            username: userState.username
        }
    }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
    return {
        type: "SIGN_OUT",
        payload:{
            isSignedIn:false,
            role:"",
            uid:"",
            username:""
        }
    }
}

export const UPDATE_USER_STATE = "UPDATE_USER_STATE";
export const updateUserStateAction = (userState) => {
    return {
        type: "UPDATE_USER_STATE",
        payload:userState
    }
}