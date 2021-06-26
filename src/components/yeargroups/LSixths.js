import '../../App.css'
import Student from "../Student"
import { useEffect, useState, useContext } from 'react'

import namelist from "../../namelist.json"

import { Context } from "../../Store"

function LSixths({ passData }) {
	const [state] = useContext(Context)

    const [childData, setChildData] = useState((state.lsixth !== undefined) ? state.lsixth : {})
	const [lsixthData, setLsixthData] = useState((state.lsixth !== undefined) ? state.lsixth : {})

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
           	<section style={{height: "20px"}}></section>
			{namelist.lsixths.map((lsixth, index) => {
				return <Student 
							key={lsixth.key}
							checked={(state.lsixth !== undefined) 
								? state.lsixth[lsixth.lastName]
								: false
							}
							dataName={lsixth.lastName} 
							display={lsixth.lastName + ", " + lsixth.firstName} 
							passData={setChildData}
							room={lsixth.room} 
						/>
			})}
        </>
    )
}

export default LSixths