import '../../App.css'
import Student from "../Student"
import { useEffect, useState } from 'react'

import namelist from "../../namelist.json"

function USixths({ passData }) {
    const [childData, setChildData] = useState({})
	const [usixthData, setUsixthData] = useState({})

	useEffect(() => {
		if (childData[0] !== undefined) {
			setUsixthData((prev) => ({
				...prev,
				[childData[0]]: childData[1]
			}))
		}
	}, [childData])

    passData(usixthData)

    return (
        <>
            <h3 style={{fontSize: "18px"}}>Upper Sixth
				{namelist.usixths.map((usixth, index) => {
					return <Student 
								dataName={usixth.lastName} 
								display={usixth.lastName + ", " + usixth.firstName} 
								passData={setChildData}
								room={usixth.room} 
							/>
				})}
			</h3>
        </>
    )
}

export default USixths