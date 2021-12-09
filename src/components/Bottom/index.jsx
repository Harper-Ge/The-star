import React, { Component } from 'react'
import './index.css'

export default class Bottom extends Component {
    render() {
        return (
            <div id='bottom-box'>
                <div className='small-box'><button id='zhuye'></button><span>主页</span></div>
                <div className='small-box'><button id='shequ'></button><span>社区</span></div>
                <div className='small-box'><button id='wode' ></button><span>我的</span></div>
                <div className='small-box'><button id='geren'></button><span>个人</span></div>
            </div>
        )
    }
}
