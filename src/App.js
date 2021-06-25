import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Container from '@material-ui/core/Container'

import Checklist from "./components/Checklist"
import UpEarlies from './components/UpEarlies'
import { useState } from 'react'

function App() {
    const [tabVal, setTabVal] = useState(0)

    const handleTabs = (e, newValue) => {
		setTabVal(newValue)
	}

    return (
        <>

            <Container maxWidth="sm">

                <h1>Welcome to Houselogger</h1>
                <p style={{marginTop: "-20px"}}>Digital Student Manager</p>
                <br/>

                <AppBar position="static">
                    <Tabs value={tabVal} onChange={handleTabs}>
                        <Tab label="Checklist" />
                        <Tab label="Up Earlies" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                
                {tabVal === 0 && <Checklist />}
                {tabVal === 1 && <UpEarlies />}
                {tabVal === 2 && <div>hi2</div>}

            </Container>
        </>
    )
}

export default App