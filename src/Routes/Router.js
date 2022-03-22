import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Cart from "../Pages/CartPage/Cart";
import ErrorPage from "../Pages/ErrorPage/Error";


const Router = () => {

    return(
        <BrowserRouter>
            <Switch>                
                <Route exact path="/">
                    <Cart/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>        
        </BrowserRouter>
    )
}

    export default Router