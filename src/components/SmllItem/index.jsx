import React, { Component } from 'react'
import './style.css'

export default class Smallitem extends Component {
    render() {
        const{name}=this.props
        return (
            <div id='small' className='maoboli'>
                <span id='text1'>{name}</span>
            </div>
        )
    }
}
