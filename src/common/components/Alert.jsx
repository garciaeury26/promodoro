import React from 'react'

import { useAlert } from 'react-alert'


export const Alert = () => {
    const alert = useAlert()
    return (
        <>
                <button
                    onClick={() => {
                        alert.show('Oh look, an alert!')
                    }}
                >
                    Show Alert
                </button>
        </>
    )
}

// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}
