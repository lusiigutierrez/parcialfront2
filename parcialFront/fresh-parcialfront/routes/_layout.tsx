import {FereshContext} from "$fresh/server.ts"

import Menu from "../components/menu.tsx"

const Layout = async (req:Request, ctx:FereshContext) =>{
    const Component = ctx.Component; 
    const route = ctx.route; 
    const page = route.split("/").pop(); 
    const selected = page === "" ? "Agenda Client Side" : "Agenda Server Side";
    return (
        <div class="layout">
        <Menu selected={selected}/>
        <h1 >My Agenda </h1>
        <Component/>
        </div>
    );


};

export default Layout; 