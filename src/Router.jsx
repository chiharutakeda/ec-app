import React from 'react';
import {Route, Switch} from "react-router";
import {CartList,ProductList,SignUp,SignIn,Auth,Reset,ProductEdit,ProductDetail,OrderConfirm} from "./templates";


const Router = () => {
    return (
        <Switch>
            <Route exact path={"/SignUp"} component={SignUp}/>
            <Route exact path={"/SignIn"} component={SignIn}/>
            <Route exact path={"/SignIn/reset"} component={Reset}/>

            <Auth>
                <Route exact path={"(/)?"} component={ProductList}/>
                <Route exact path={"/product/:id?"} component={ProductDetail}/>
                <Route path={"/product/edit(/:id)?"} component={ProductEdit}/>

                <Route path={"/cart"} component={CartList}/>
                <Route path={"/order/confirm"} component={OrderConfirm}/>
            </Auth>
        </Switch>
    )
}

export default Router;