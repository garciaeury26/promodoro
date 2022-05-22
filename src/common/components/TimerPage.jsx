import React, { useState } from 'react'
import { getAndSetDate } from '../helpers/getDate'
import { MoreAndLess } from './MoreAndLess'


export const TimerPage = () => {

    const [minutos, setMinutos] = useState(24)
    const [segundos, setSegundos] = useState(59)
    const [statePausado, setPausado] = useState(true)

    const date = setTimeout(() => {
        if (minutos >= 0) {
            if (segundos > 0) {
                setSegundos(segundos - 1)
            } else if (minutos > 0) {
                setSegundos(segundos + 59)
                setMinutos(minutos - 1)
            }
        }
    }, 1000)


    if (statePausado) {
        clearTimeout(date)
    }

    const continuar = () => {
        if (minutos >= 0) {
            setTimeout(() => {
                if (segundos > 0) {
                    setSegundos(segundos - 1)
                } else if (minutos > 0) {
                    setSegundos(segundos + 59)
                    setMinutos(minutos - 1)
                }
            }, 1000)
        }
    }

    const reset = () => {
        setPausado(true)
        setMinutos(24);
        setSegundos(59)
    }


    return (
        <>
            <div className='timer-container'>
                <h1 id='demo'>{minutos}:{segundos}</h1>
                <div id='button-container'>
                    <i
                        className={`${statePausado ? 'fas fa-play-circle fa-2x' : 'far fa-pause-circle fa-2x'}`}
                        onClick={() => {
                            continuar
                            setPausado(false);
                        }}
                        onDoubleClick={
                            () => setPausado(true)
                        }
                    >
                    </i>

                    <i className="fas fa-stop-circle fa-2x" onClick={reset}></i>
                </div>

                <MoreAndLess setMinutos={setMinutos} />

            </div>


            <audio src="https://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
                autoPlay>
                Your browser does not support the <code>audio</code> element.
            </audio>


        </>
    )

}
