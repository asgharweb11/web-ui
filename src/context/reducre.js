import {THEME} from "./types"

export default function reducer (init , action){
    switch(action.type){
        case THEME : 
            return {...init , design : {...init.design , theme : action.payload}}
        default : 
            return init;

    }
}
