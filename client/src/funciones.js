import React from 'react'

export const SignoMontos = (props) => {
    props.map(Registro => {

        if (Registro === 'ingreso') {
            Registro.monto = parseInt(Registro.monto)
        } else {
            Registro.monto = parseInt(-Registro.monto)
        }
            })
    
}

export default SignoMontos
