import Checkbox from '@material-ui/core/Checkbox'

import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

function Student({ display, dataName, passData, room }) {

    const handleChange = (e) => {
        passData([e.target.name, e.target.checked])
    }

    return (
        <>
            <ListItem button>
				<ListItemAvatar>
					<Avatar
					/>
				</ListItemAvatar>
				<ListItemText primary={display} />
				<ListItemSecondaryAction id="adddelete">
                    <span style={{verticalAlign: "middle"}}>{room}</span>
                    <Checkbox
                        edge="end"
                        value={dataName}
                        onChange={handleChange}
                        name={dataName}
                        color="primary"
                    />
				</ListItemSecondaryAction>
          	</ListItem>
        </>
    )
}

export default Student