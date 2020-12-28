import {THEME , SIDEBAR_R} from "./types"

export default function reducer (init , action){
    console.log("hello : " , action)
    switch(action.type){
        case THEME : 
            return {...init , design : {...init.design , theme : action.payload}}
        case SIDEBAR_R :
            return {...init , move : {...init.move , sidebarR : action.payload}}
        default : 
            return init;

    }
}
