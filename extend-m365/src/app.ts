import { app } from "@microsoft/teams-js";

// async iife
(async () => {
    
    // initialize the Teams library
    app.initialize();
    
    // get the app context
    const context = await app.getContext();

    // get the host name
    const { name } = context.app.host;

    // update the DOM
    const span = document.getElementById("host");
    if(span) span.innerText = name;
    
})();