import React, {useReducer} from 'react'

import firebaseReducer  from './firebaseReducer'
import FirebaseContext from './firebaseContext'
import firebase from '../../firebase'

import BusquedaVehiculos from '../../src/components/BusquedaVehiculos'
import { Menu } from 'react-native-paper'


const FirebaseState = props =>{
    const initialState={
        menu:[]
    }

    const [state, dispatch] = useReducer(firebaseReducer,initialState)

    

            return(
                <FirebaseContext.Provider
                value={{
                    menu: state.menu,
                    firebase
                    

                }}
                >
                   {props.children} 
                </FirebaseContext.Provider>
            )
        
}
export default FirebaseState