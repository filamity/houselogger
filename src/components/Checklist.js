import '../App.css'
import { useState, useContext, useEffect } from 'react'

import Removes from './yeargroups/Removes'
import Fifths from './yeargroups/Fifths'
import LSixths from './yeargroups/LSixths'
import USixths from './yeargroups/USixths'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'

import { Context } from "../Store"

function Checklist() {
	const [state, setState] = useContext(Context)

	const [display, setDisplay] = useState("Removes")

	const [removeData, setRemoveData] = useState(state.remove)
	const [fifthData, setFifthData] = useState(state.fifth)
	const [lsixthData, setLsixthData] = useState(state.lsixth)
	const [usixthData, setUsixthData] = useState(state.usixth)

	var allData = {
		remove: {...removeData},
		fifth: {...fifthData},
		lsixth: {...lsixthData},
		usixth: {...usixthData},
	}

	// Save to global state
	useEffect(() => {
		setState(allData)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [removeData, fifthData, lsixthData, usixthData])

	const handleChange = (event) => {
		setDisplay(event.target.value)
	}

	return (
		<>

			<pre>
				state = {JSON.stringify(state, null, 2)}
			</pre>
			
			<br/>

			<InputLabel>Year Group</InputLabel>
			<Select
				value={display}
				onChange={handleChange}
			>
				<MenuItem value={"Removes"}>Removes</MenuItem>
				<MenuItem value={"Fifths"}>Fifth Form</MenuItem>
				<MenuItem value={"LSixths"}>Lower Sixth</MenuItem>
				<MenuItem value={"USixths"}>Upper Sixth</MenuItem>
			</Select>
			<FormHelperText>Select a Year Group to display</FormHelperText>

			{display === "Removes" && <Removes passData={setRemoveData} />}
			{display === "Fifths" && <Fifths passData={setFifthData} />}
			{display === "LSixths" && <LSixths passData={setLsixthData} />}
			{display === "USixths" && <USixths passData={setUsixthData} />}

		</>
	)
}

export default Checklist;