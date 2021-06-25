import '../../App.css'
import Student from "../Student"
import { useEffect, useState } from 'react'

import namelist from "../../namelist.json"

function Removes({ passData }) {
    const [childData, setChildData] = useState({})
	const [removeData, setRemoveData] = useState({})

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
            <h3 style={{fontSize: "18px"}}>Removes
				{namelist.removes.map((remove, index) => {
					return <Student 
								dataName={remove.lastName} 
								display={remove.lastName + ", " + remove.firstName} 
								passData={setChildData}
								room={remove.room} 
							/>
				})}
			</h3>
        </>
    )
}

export default Removes