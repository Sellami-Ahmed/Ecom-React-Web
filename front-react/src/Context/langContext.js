import React from "react";

const LANG={
    fr:{
        home:"Page d'accueil",
        client:"client",
    },
    an:{
        home:"Home page",
        client:"customer",
    },
}
const LangContext=React.createContext(LANG);
export{
    LANG,
    LangContext,
}