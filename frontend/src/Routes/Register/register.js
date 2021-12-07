import React, { Component, useState } from 'react'




export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',

        }
    }

    render() {
        return (
            
            <form >
                <label >
                    Name:
                </label>
                <input type='text' id='name' name='name' onChange={ (event) => this.handleChange(event)} value={this.state.name}/>
            </form>


        )
    }
}
