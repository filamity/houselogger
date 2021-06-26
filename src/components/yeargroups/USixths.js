import '../../App.css'
import Student from "../Student"
import { useEffect, useState, useContext } from 'react'

import namelist from "../../namelist.json"
import { Context } from "../../Store"

function USixths({ passData }) {
	const [state] = useContext(Context)

    const [childData, setChildData] = useState((state.usixth !== undefined) ? state.usixth : {})
	const [usixthData, setUsixthData] = useState((state.usixth !== undefined) ? state.usixth : {})

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
            <section style={{height: "20px"}}></section>
			{namelist.usixths.map((usixth, index) => {
				return 	<Student 
							key={usixth.key}
							checked={(state.usixth !== undefined) 
								? state.usixth[usixth.lastName]
								: false
							}
							dataName={usixth.lastName} 
							display={usixth.lastName + ", " + usixth.firstName} 
							passData={setChildData}
							room={usixth.room} 
						/>
			})}
        </>
    )
}

export default USixths