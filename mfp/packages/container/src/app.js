import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';

// Why??? Make to flexiable, 
// Container doesn't know what Framework which marketing using.
// import { mount } from 'marketing/MarketingApp';

import MakertingApp from './components/marketing-app';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MakertingApp />
            </div>        
        </BrowserRouter>
    )
};

export default App;