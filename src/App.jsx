import React from 'react';

import './common/assest/css/index.css';
import { TimerPage } from './common/components/TimerPage';

export const App = () => {

    alert('Doble click para pausar');
    return (
        <>
            <div className='container' >
                <TimerPage />

                <alert className='alert alert-primary' role='alert'/>
            </div >
        </>
    )
}



