import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles( {
    root: {
        background: "#CFD8DC",
        marginTop: 15,
        minWidth: 275,
        maxWidth: 450,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 10
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
} )
function CreateNote( props )
{
    const [note, setNote] = useState( {
        title: "",
        content: "",
    } )

    const InputEvent = ( event ) =>
    {
        const { name, value } = event.target
        setNote( ( prev ) =>
        {
            return {
                ...prev,
                [name]: value,
            }
        } )
    }
    const addEvent = () =>
    {
        props.passNote( note )
        setNote( {
            title: "",
            content: "",
        } )
    }
    const classes = useStyles()
    return (

        < Card className={classes.root} >
            <CardContent>
                <div className="main_note form-group">

                    <form>
                        <label> <h3>Add a note</h3> </label>
                        <input name="title" value={note.title} onChange={InputEvent} type="text" placeholder="Title" className="form-control" autoComplete="off" />
                        <br />
                        <textarea name="content" value={note.content} onChange={InputEvent} cols="" rows=""
                            placeholder="Write a note..." className="form-control"
                        />
                        <br />
                        <div className="text-right">
                            <Button variant="contained" color="primary" onClick={addEvent}>
                                <AddCircleOutlineIcon /></Button></div>
                    </form>
                </div>
            </CardContent>
        </Card>
    )
}

export default CreateNote
