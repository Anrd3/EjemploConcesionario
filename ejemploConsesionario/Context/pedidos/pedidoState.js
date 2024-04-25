import React, {useReducer} from 'react'
import PedidoContext from './pedidoContext'
import PedidoReducer from './pedidoReducer'
import BusquedaVehiculos from '../../src/components/BusquedaVehiculos'
import firebase from 'firebase/compat/app'


const PedidoState = props =>{
    const inicialState={
        pedido:[]
    }

const [state,dispatch] = useReducer(PedidoReducer,inicialState)
            return(
                <PedidoContext.Provider
                value={{
                    pedido: state.pedido,
                    firebase,
                    BusquedaVehiculos

                            

                }}
                >
                   {props.children} 
                </PedidoContext.Provider>
            )
        
}
export default PedidoState