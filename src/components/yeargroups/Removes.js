import '../../App.css'
import Student from "../Student"
import { useEffect, useState, useContext } from 'react'

import namelist from "../../namelist.json"

import { Context } from "../../Store"

function Removes({ passData }) {
	const [state] = useContext(Context)

	// Change this to state.remove
    const [childData, setChildData] = useState((state.remove !== undefined) ? state.remove : {})
	const [removeData, setRemoveData] = useState((state.remove !== undefined) ? state.remove : {})

	useEffect(() => {
		if (childData[0] !== undefined) {
			setRemoveData((prev) => ({
				...prev,
				[childData[0]]: childData[1]
			}))
		}
	}, [childData])

    passData(removeData)


    return (
        <>
			{namelist.removes.map((remove, index) => {
				return <Student
							key={remove.key}
							checked={(state.remove !== undefined) 
										? state.remove[remove.lastName]
										: false
									}
							dataName={remove.lastName} 
							display={remove.lastName + ", " + remove.firstName} 
							passData={setChildData}
							room={remove.room} 
						/>
			})}
        </>
    )
}

export default Removes