import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Container from '@material-ui/core/Container'

import Checklist from "./components/Checklist"
import UpEarlies from './components/UpEarlies'
import { useState } from 'react'

import Store from "./Store"

function App() {
    const [tabVal, setTabVal] = useState(0)

    const handleTabs = (e, newValue) => {
		setTabVal(newValue)
	}

    return (
        <Store>

            <Container maxWidth="sm">

                <section style={{height: "20px"}}></section>

                <h1>Welcome to Houselogger</h1>
                <p style={{marginTop: "-20px"}}>Digital Student Manager</p>
                <br/>

                <AppBar position="static">
                    <Tabs value={tabVal} onChange={handleTabs} variant="fullWidth">
                        <Tab label="Checklist" />
                        <Tab label="Up Earlies" />
                    </Tabs>
                </AppBar>
                
                <div style={{display: tabVal === 0 ? "block" : "none"}}>
                    <Checklist />
                </div>

                <div style={{display: tabVal === 1 ? "block" : "none"}}>
                    <UpEarlies />
                </div>

            </Container>

        </Store>
    )
}

export default App