import '../../App.css'
import Student from "../Student"
import { useEffect, useState, useContext } from 'react'

import namelist from "../../namelist.json"
import { Context } from "../../Store"

import CircularProgress from '@material-ui/core/CircularProgress';

function Fifths() {
	const [state, setState] = useContext(Context)

    const [childData, setChildData] = useState({})
	const [fifthData, setFifthData] = useState({})

	const [saving, setSaving] = useState(0)

	var dataHere = false
	if (state.fifth.Chan !== undefined) {
		dataHere = true
	}

	useEffect(() => {
		setSaving(1)
		setTimeout(() => setSaving(0), 8000)
	}, [childData])

	// Passes everything to removeData
	useEffect(() => {
		if (dataHere) {
			setFifthData(state.fifth)
			setFifthData((prev) => ({
				...prev,
				[childData[0]]: childData[1]
			}))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [childData])

	useEffect(() => {
		if (dataHere) {
			setState((prev) => ({
				...prev,
				fifth: fifthData
			}))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fifthData])

    if (!dataHere) {
		return (
			<div className="spinner">
				<CircularProgress />
			</div>
		)
	}

    return (
        <>
            <center style={{opacity: saving}}>Saving...</center>
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