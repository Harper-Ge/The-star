import React, { Component } from 'react'
import MyHeader from '../../components/MyHeader'
import Smallitem from '../../components/SmllItem'
import Bottom from '../../components/Bottom/index.jsx'
import './index.css'

export default class MyPage extends Component {
    render() {
        return (
            <div id='mypage'>
                <MyHeader/>
                
                <div id="smallbox">
                    <Smallitem name='我的关注'/>
                    <Smallitem name='账户设置'/>
                    <Smallitem name='学号信息'/>
                    <Smallitem name='安全与隐私'/>
                    <Smallitem name='版本更新'/>
                    <Smallitem name='关于星社与帮助'/>
                </div>
                <div id='container'>
                <Bottom/>
            </div>
            </div>
            
        )
    }
}
