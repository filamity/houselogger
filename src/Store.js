import React, { useEffect, useState } from "react"
import { firestore } from "./firebase"

export const Context = React.createContext()

const Store = ({ children }) => {
    
    var all_remove_data = firestore.collection("student-data").doc("removes")
    const [state, setState] = useState({"remove":{},"fifth":{}})
    
    useEffect(() => {

        // Fetch Data
        all_remove_data.get().then((doc) => {
            if (doc.exists) {
                setState(doc.data().all)
            } else {
                console.log("Document not found!")
            }
        }).catch((error) => {
            console.log("Error getting document: ", error)
        })
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {

        // Looks for these keys in state; indicates whether data has arrived
        var data_here = (state.remove.Allday !== undefined) && (state.fifth.Chan !== undefined)

        // Wait for data to return. Extremely rudimentary solution.
        if (data_here) {
            all_remove_data.update({
                all: state
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])
    
    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )

}


export default Store