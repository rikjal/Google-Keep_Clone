import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import CreateNote from './components/CreateNote'
import Note from './components/Note'

function App()
{
  const [addItem, setAddItem] = useState( [] )
  const addNote = ( note ) =>
  {
    setAddItem( ( prev ) =>
    {
      return [...prev, note]
    } )
  }
  const onDelete = ( id ) =>
  {
    setAddItem( ( prev ) =>
    {
      return prev.filter( ( curdata, indx ) =>
      {
        return indx !== id
      } )
    } )
  }

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <div className="container-fluid">

                <CreateNote passNote={addNote} />
                <div className="row">
                  {addItem.map( ( val, index ) =>
                  {
                    return (
                      <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                      />
                    )
                  } )}
                </div>
              </div>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  )

}

export default App
