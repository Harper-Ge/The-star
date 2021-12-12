import React, { Component } from 'react'
import { Route,Routes,NavLink} from 'react-router-dom'
import ShequHeader from '../../components/ShequHeader'
import Tongxue from './Tongxue'
import Shetuan from './Shetuan'
import Bigitem from '../../components/BigItem' 
import './index.css'
import Bottom from '../../components/Bottom/index.jsx'

export default class SheQu extends Component {
    render() {
        return (
            <div id='shequ'>
                <ShequHeader/>
                <div id="smallbox2">
        <Bigitem />
        <Bigitem />
        </div>
                    <Bigitem/>
                    <Bigitem/>
                    <div id='container'>
                <Bottom/>
            </div>
            </div>
        )
    }
} 
