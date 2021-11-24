// TypeScript is highly efficient
// const Main = require("./app/Main");
import { Main } from "./app/Main";
import {defaultState} from "./defaultState";

const renderApp = ()=>{

    const rendered : string = new Main(defaultState).render();
    document.getElementById("App").innerHTML = rendered;

}

renderApp();