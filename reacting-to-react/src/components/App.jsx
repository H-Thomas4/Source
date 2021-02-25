import React from 'react';
import Greet from './components/Greeter';
import React, { useState } from 'react';

const App = () => {
 

    return (
        <div>
            <h1 className="begin">This is where it begins!</h1>
        </div>
    
    );

    greet = () => {
        return (
            <>
            <Greet name="Antonio" phrase="eat, shit and sleep." />
            <Greet name="Kendall" phrase="cook, draw and sing." />
            <Greet name="Kaleb" phrase="pester siblings and make messes." />
            <Greet name="Ethan" phrase="draw, play chess and talk to girls." />
            </>
        );
    };

    setuserName = () => {
     const userName = useState(' ');
        
        return (
            <>
            <input value={userName} onChange={e => setUsername(e.target.value)} />
            <p>You are logging in as:{userName}</p>
            </>

            ); 
            
            
    };

    checkLoaded = () => {
        const loaded = useState(' ');
        loadVal === false;


        if (loadval ===true) {
            return (
                <>
                <h1>Website Loading</h1>
                 </>
            )
        }
        
    }
   

    
    
};




    


export default App;