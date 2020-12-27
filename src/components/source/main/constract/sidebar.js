import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
// ----------- Todo , Dispatch
import {useTodo} from "../../../../context"
import {THEME} from "../../../../context/types"
// ------- Change Theme 
import {Color} from "../../theme/events"
// ------- Fonts 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch , faUtensils,  faMap , faChartPie , faPlus , faShoppingCart , faGem , faCog} from "@fortawesome/free-solid-svg-icons"
import s from "../../../../store.json"


const Sidebar = () => {

    const {todo , dispatch} = useTodo();
    const handleClick = () => {
        dispatch({type : THEME , payload : todo.design.theme === "ligth" ? "dark" : "ligth"})
    }

    return (
        <Div todo={todo}>
            <ul>
                <Link><li onClick={handleClick}><FontAwesomeIcon icon={faSearch} size="lg" /></li></Link>
            </ul>
            <ul>
                <Link to="/"><li><FontAwesomeIcon icon={faUtensils} size="lg" /></li></Link>
                <Link to="/about"><li><FontAwesomeIcon icon={faMap} size="lg" /></li></Link>
                <Link to="/dashboard"><li><FontAwesomeIcon icon={faChartPie} size="lg" /></li></Link>
                <Link to="/contact"><li><FontAwesomeIcon icon={faPlus} size="lg" /></li></Link>
            </ul>
            <ul>
                <Link to="/"><li><FontAwesomeIcon icon={faShoppingCart} size="lg" /></li></Link>
                <Link to="/"><li><FontAwesomeIcon icon={faGem} size="lg" /></li></Link>
                <Link to="/"><li><FontAwesomeIcon icon={faCog} size="lg" /></li></Link>
            </ul>
        </Div>
    )
}

const Div = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    align-items : center;
    height:100vh;
    ul {
        padding : 0;
        margin : 20px 0px;
    }
    ul:first-child{
        flex:1;
        a li{
            color: ${({theme , todo}) => eval("theme."+todo.design.theme+".text."+todo.design.text)};
            &:hover {
                color : ${({theme , todo}) => eval("theme."+todo.design.theme+".text."+todo.design.color)};
                background : ${({theme , todo}) => eval("theme."+todo.design.theme+".text."+todo.design.color)};
            }
        }
    }
    ul:nth-child(2){
        flex:5;
        a:first-child li {
            background : ${({theme , todo}) => eval("theme."+todo.design.theme+".error")};
            &:hover {
                background : ${({theme,todo}) => eval("theme."+todo.design.theme+".hover.error")};
            }
        }
        a:nth-child(2) li{
            background: ${({theme,todo}) => eval("theme."+todo.design.theme+".warning")};
            &:hover {
                background : ${({theme,todo}) => eval("theme."+todo.design.theme+".hover.warning")};
            }
        }
        a:nth-child(3) li{
            background: ${({theme,todo}) => eval("theme."+todo.design.theme+".info")};
            &:hover {
                background : ${({theme,todo}) => eval("theme."+todo.design.theme+".hover.info")};
            }
        }
        a:last-child li{
            color : ${({theme,todo}) => eval("theme."+todo.design.theme+".text.grey")};
            &:hover {
                color : ${({theme,todo}) => eval("theme."+todo.design.theme+".hover.grey")};
            }
        }
    }
    ul:last-child{
        flex:0;
        a:first-child li{
            background: ${({theme,todo}) => eval("theme."+todo.design.theme+".primary")};
            &:hover {
                background : ${({theme,todo}) => eval("theme."+todo.design.theme+".hover.primary")};
            }
        }
        a:nth-child(2) li{
            background: ${({theme,todo}) => eval("theme."+todo.design.theme+".success")};
            &:hover {
                background : ${({theme,todo}) => eval("theme."+todo.design.theme+".hover.success")};
            }
        }
        a:last-child li{
            color : ${({theme,todo}) => eval("theme."+todo.design.theme+".text.grey")};
            &:hover {
                background : ${({theme,todo}) => eval("theme."+todo.design.theme+".hover.grey")};
            }

        }
    }
    li {
        padding: 10px;
        margin: 10px 0px;
        border-radius: 10px;
        list-style: none;
        color: white;
        cursor: pointer;
        transition : 0.3s ease;
    }

    
`
export default Sidebar;