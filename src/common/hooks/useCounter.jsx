//*nuevamente un hook no es mas que una simple funcion

//un custoomHook es un hook que creas

import { useState } from "react"


export const useCouter = (initialState = 10) => {
    const [counter, setConter] = useState(initialState)

    const increment = () => {
        setConter(counter + 1)
    }

    const decrement = () => {
        setConter(counter - 1)
    }

    const resetear = () => {
        setConter(initialState)
    }

    //puedes retornar un odjeto si quieres
    return {
        counter,
        increment,
        decrement,
        resetear
    }
}

