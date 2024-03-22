import {FunctionComponent} from "preact"; 

type MenuProps = {
   selected: "Agenda Client Side" | "Agenda Server Side"; 
};

const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
    return (
        <div class="header">
            <a href="/agendacsr" class={selected == "Agenda Client Side" ? selected : ""} >
            Agenda Client Side
            </a>
            <a href="/agendassr" class={selected == "Agenda Server Side" ? selected : ""} >
            Agenda Server Side
            </a>

        </div>

    )

}; 

export default Menu; 
