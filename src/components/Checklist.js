import '../App.css'
import { useState, useContext, useEffect } from 'react'

import Removes from './yeargroups/Removes'
import Fifths from './yeargroups/Fifths'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'

import { Context } from "../Store"

function Checklist() {
	const [state, setState] = useContext(Context)

	const [display, setDisplay] = useState("Fifths")

	const [removeData] = useState(state.remove)
	const [fifthData] = useState(state.fifth)

	var allData = {
		remove: {...removeData},
		fifth: {...fifthData},
	}

	// Save to global state
	useEffect(() => {
		setState(allData)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [removeData, fifthData])

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
			</Select>
			<FormHelperText>Select a Year Group to display</FormHelperText>

			<div style={{display: display === "Removes" ? "block" : "none"}}>
				<Removes />
			</div>

			<div style={{display: display === "Fifths" ? "block" : "none"}}>
				<Fifths />
			</div>

		</>
	)
}

export default Checklist;