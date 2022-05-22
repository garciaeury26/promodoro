import React from 'react'

export const MoreAndLess = ({ setMinutos }) => {


    const sumar = () => {
        setMinutos(minutos => minutos + 1)
    }

    const restar = () => {
        setMinutos(minutos => minutos - 1)
    }

    return (
        <>
            <i className="fas fa-plus" onClick={sumar}></i>
            <i className="fas fa-minus" onClick={restar}></i>
        </>
    )
}
