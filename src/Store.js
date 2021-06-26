import React, { useEffect, useState } from "react"

/*
    What's going on here?

    To run on localhost, do "npm start" in the console.

    Basically, initialState (line 27) is the initial data passed down to the Checklist 
    to be modified. Right now the intial data is just {}, which is why refreshing the 
    page will get rid of the data.

    As the data is modified, it is saved in a "state" variable (line 32), and you can
    see it changing in the code snippet thing in the browser. What I'm hoping to have
    is to save the data in a database every time it changes, and retrieving it from
    the database when you refresh the page.

    To retrieve the data, maybe something like:
    const initialState = databaseData   (line 27)

    As for saving the data, look at the useEffect() hook from line 30. What it basically
    does is execute the code within every time the data changes. Basically that is where
    the saving-to-database stuff should happen.

    If my code is confusing, do ask!
*/

const initialState = {}

export const Context = React.createContext()

const Store = ({ children }) => {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        // Code to save stuff to database here
        console.log("data has changed!")

    }, [state])
    
    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default Store