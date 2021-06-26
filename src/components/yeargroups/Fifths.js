import '../../App.css'
import Student from "../Student"
import { useEffect, useState, useContext } from 'react'

import namelist from "../../namelist.json"

import { Context } from "../../Store"

function Fifths({ passData }) {
	const [state] = useContext(Context)

    const [childData, setChildData] = useState((state.fifth !== undefined) ? state.fifth : {})
	const [fifthData, setFifthData] = useState((state.fifth !== undefined) ? state.fifth : {})

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
            <section style={{height: "20px"}}></section>
			{namelist.fifths.map((fifth, index) => {
				return <Student 
							key={fifth.key}
							checked={(state.fifth !== undefined) 
								? state.fifth[fifth.lastName]
								: false
							}
							dataName={fifth.lastName} 
							display={fifth.lastName + ", " + fifth.firstName} 
							passData={setChildData}
							room={fifth.room} 
						/>
			})}
        </>
    )
}

export default Fifths