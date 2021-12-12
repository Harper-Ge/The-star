import React, { Component } from 'react'
import Header from '../../components/Header'
import Weikaishi from '../../components/Weikaishi'
import './index.css'
import Bottom from '../../components/Bottom/index.jsx'

export default class MyActivity extends Component {
    render() {
        return (
            <div id='activity'>
               <Header/>
                <div id='container1'>
                    <div id='weikaishi'>
                        <div>
                            <span className='title'>未开始</span>
                            <Weikaishi/>
                        </div>
                        
                    </div>
                    <div id="daipingjia">
                        <div>
                            <span className='title'>待评价</span>
                            <Weikaishi/>
                        </div>
                        <div id='container'>
                <Bottom/>
            </div>
                    </div>
                </div>
            </div>
        )
    }
}
