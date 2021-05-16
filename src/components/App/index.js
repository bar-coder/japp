import React from 'react'
import { 
    BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import LoginPage from '../Login/index'
import FoodsPage from '../Foods/index'
import FoodEditPage from '../FoodEdit/index'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTES.LANDING}>
                    <FoodsPage />
                </Route>

                <Route path={ROUTES.SIGN_IN}>
                    <LoginPage />
                </Route>
                
                <Route path={ROUTES.NEW_FOOD}>
                    <FoodEditPage />
                </Route>

                <Route path={ROUTES.EDIT_FOOD}>
                    <FoodEditPage />
                </Route>

                <Route path={ROUTES.FOODS}>
                    <FoodsPage />
                </Route>

            </Switch>
        </Router>
    )
}
