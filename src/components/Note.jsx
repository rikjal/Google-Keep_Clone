import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import Card from '@material-ui/core/Card'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles( {
    root: {
        background: "#dae2f8",
        backgroundImage: "linear-gradient(to bottom, #dae2f8, #d6a4a4)",
        marginTop: 15,
        minWidth: 200,
        maxWidth: 300,
        padding: 10,
    },
} )

function Note( props ) {
    const deleteNote = () => {
        props.deleteItem( props.id )
    }
    const classes = useStyles()
    return (

        <div className="col-sm-6 col-lg-3 col-12 col-md-4 mb-4">
            <Card className={classes.root}>
                <h1>{props.title}</h1>
                <hr />
                <p>{props.content}</p>
                <button className="btn btn-danger" onClick={deleteNote}>
                    <DeleteOutlineIcon className="deleteIcon" /></button>
            </Card>
        </div>
    )
}

export default Note