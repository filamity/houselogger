import '../../App.css'
import Student from "../Student"
import { useEffect, useState } from 'react'

import namelist from "../../namelist.json"

function LSixths({ passData }) {
    const [childData, setChildData] = useState({})
	const [lsixthData, setLsixthData] = useState({})

	useEffect(() => {
		if (childData[0] !== undefined) {
			setLsixthData((prev) => ({
				...prev,
				[childData[0]]: childData[1]
			}))
		}
	}, [childData])

    passData(lsixthData)

    return (
        <>
            <h3 style={{fontSize: "18px"}}>Lower Sixth
				{namelist.lsixths.map((lsixth, index) => {
					return <Student 
								dataName={lsixth.lastName} 
								display={lsixth.lastName + ", " + lsixth.firstName} 
								passData={setChildData}
								room={lsixth.room} 
							/>
				})}
			</h3>
        </>
    )
}

export default LSixths