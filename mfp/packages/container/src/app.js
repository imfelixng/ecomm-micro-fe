import React from 'react';

// Why??? Make to flexiable, 
// Container doesn't know what Framework which marketing using.
// import { mount } from 'marketing/MarketingApp';

import MakertingApp from './components/marketing-app';

const App = () => {
    return (
        <div>
            <h1>Hello App</h1>
            <br />
            <MakertingApp />
        </div>
    )
};

export default App;