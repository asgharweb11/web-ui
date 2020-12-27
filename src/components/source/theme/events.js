import theme from "./theme"

export const Color = (item , param) => {
    switch(item){
        case "ligth" :
            return theme.ligth.text.grey;
        case "dark" :
            return theme.dark.text.grey;
    }
}