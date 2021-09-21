import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Apps from "./components/App/App"
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/> 
                    <Route exact path="/app/:id" component={Apps} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
