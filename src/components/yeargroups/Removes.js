import '../../App.css'
import Student from "../Student"
import { useEffect, useState, useContext } from 'react'

import namelist from "../../namelist.json"
import { Context } from "../../Store"

import CircularProgress from '@material-ui/core/CircularProgress';

function Removes() {
	const [state, setState] = useContext(Context)
	
	const [childData, setChildData] = useState({})
	const [removeData, setRemoveData] = useState({})

	const [saving, setSaving] = useState(0)

	var dataHere = false
	if (state.remove.Allday !== undefined) {
		dataHere = true
	}

	useEffect(() => {
		setSaving(1)
		setTimeout(() => setSaving(0), 8000)
	}, [childData])
	
	// Passes everything to removeData
	useEffect(() => {
		if (dataHere) {
			setRemoveData(state.remove)
			setRemoveData((prev) => ({
				...prev,
				[childData[0]]: childData[1]
			}))
		}
	}, [childData])

	useEffect(() => {
		if (dataHere) {
			setState((prev) => ({
				...prev,
				remove: removeData
			}))
		}
	}, [removeData])

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