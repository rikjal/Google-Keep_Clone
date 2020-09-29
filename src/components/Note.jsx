import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import './css/note.css'
const useStyles = makeStyles( {
    root: {
        background: "#BCAAA4",
        marginTop: 15,
        minWidth: 200,
        maxWidth: 300,
        padding: 10,
    },
} )

function Note( props )
{
    const deleteNote = () =>
    {
        props.deleteItem( props.id )
    }
    const classes = useStyles()
    return (

        <div className="col-sm-6 col-lg-3 col-6 col-md-4">
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