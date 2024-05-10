import React, { useReducer } from 'react'
import firebaseReducer  from './firebaseReducer'
import FirebaseContext from './firebaseContext'
import firebase from '../../firebase'
import { OBTENER_PRODUCTOS_EXITO } from '../../types'
import _ from 'lodash'




const FirebaseState = props =>{
    const initialState={
        menu:[]
    }

    const [state, dispatch] = useReducer(firebaseReducer,initialState)

    const obtenerProducto = () => {

        firebase.db
        .collection('productos')
        .onSnapshot(manejarSnapshot) // manejo db tiempo real

        function manejarSnapshot(snapshot){
            let plato = snapshot.docs.map(doc=> {
                return{
                 
                    id: doc.id,
                    ...doc.data()
                       
                }
            });

            plato = _.sortBy(plato, 'categoriaScrollView')
           console.log(plato)
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: plato
                
            })
            
        } 
    }
    

            return(
                <FirebaseContext.Provider
                value={{
                    menu: state.menu,
                    firebase,
                    obtenerProducto
                }}
                >
                   {props.children} 
                </FirebaseContext.Provider>
            )
        
}
export default FirebaseState