import '../../App.css'
import Student from "../Student"
import { useEffect, useState } from 'react'

import namelist from "../../namelist.json"

function Fifths({ passData }) {
    const [childData, setChildData] = useState({})
	const [fifthData, setFifthData] = useState({})

	useEffect(() => {
		if (childData[0] !== undefined) {
			setFifthData((prev) => ({
				...prev,
				[childData[0]]: childData[1]
			}))
		}
	}, [childData])

    passData(fifthData)

    return (
        <>
            <h3 style={{fontSize: "18px"}}>Fifth Form
				{namelist.fifths.map((fifth, index) => {
					return <Student 
								dataName={fifth.lastName} 
								display={fifth.lastName + ", " + fifth.firstName} 
								passData={setChildData}
								room={fifth.room} 
							/>
				})}
			</h3>
        </>
    )
}

export default Fifths