import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Luyou from './Component/luyou'

ReactDOM.render(
    <BrowserRouter>
        <Luyou />
    </BrowserRouter>,
    document.getElementById('root')
)
