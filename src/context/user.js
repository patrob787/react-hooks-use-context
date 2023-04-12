import React, { useState } from "react";

// create the context
const UserContext = React.createContext();

//create a provider component
function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const currentUser = {
        name: "Duane",
        interests: ["Coding", "Biking", "Words", "ending in 'ing'"],
    };

    //the value prop of provider will be our context data
    //this value will be available to child components of the provider
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider };