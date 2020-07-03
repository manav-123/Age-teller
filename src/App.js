import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import AppStats from './AgeStats'
import './App.css'
class App extends Component {
    constructor() {
        super()
        this.state = {
            newDate: '',
            Birthday: '2016-06-15',
            showStat: false

        }
    }
    changeBirthday () {
        this.setState({
            Birthday: this.state.newDate,
            showStat: true
        })
    }
    render() {
        return (
            <div className='App'>
                <Form inline>
                    <h2> Input Your Birthday </h2>
                    <FormControl type='date' onChange={event => this.setState({ newDate: event.target.value })} >
                    </FormControl>
                    {' '}
                    <Button onClick= { () => this.changeBirthday()}> Submit </Button>
                    {
                        this.state.showStat ? <AppStats date={this.state.Birthday}/> : <div></div>
                    }
                </Form>
            </div>
        )
    }
}

export default App
