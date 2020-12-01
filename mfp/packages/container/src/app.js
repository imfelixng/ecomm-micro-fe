import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/header';

// Why??? Make to flexiable, 
// Container doesn't know what Framework which marketing using.
// import { mount } from 'marketing/MarketingApp';

import Progress from './components/progress';

const MakertingAppLazy = lazy(() => import('./components/marketing-app'));
const AuthAppLazy = lazy(() => import('./components/auth-app'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const App = () => {
    return (
        <StylesProvider generateClassName = {generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Suspense fallback = {<Progress />}>
                        <Switch>
                            <Route path = "/auth" component = {AuthAppLazy}/>
                            <Route path = "/" component = {MakertingAppLazy}/>
                        </Switch>
                    </Suspense>
                    
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
};

export default App;