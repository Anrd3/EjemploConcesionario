import React, {useReducer} from 'react'
import PedidoContext from './pedidoContext'
import PedidoReducer from './pedidoReducer'
import BusquedaVehiculos from '../../src/components/BusquedaVehiculos'
import firebase from 'firebase/compat/app'
import { SELECCIONAR_PRODUCTOS } from '../../types'

const PedidoState = props =>{
    const inicialState={
        pedido:[],
        Platillo: null
    }

const [state,dispatch] = useReducer(PedidoReducer,inicialState)
//seleccionar y obtener producto
const seleccionarPlatillo = platillo =>{
    dispatch({
        type: SELECCIONAR_PRODUCTOS,
        payload: platillo
    })
}
            return(
                <PedidoContext.Provider
                value={{
                    pedido: state.pedido,
                    platillo: state.platillo,
                    seleccionarPlatillo

                            

                }}
                >
                   {props.children} 
                </PedidoContext.Provider>
            )
        
}
export default PedidoState