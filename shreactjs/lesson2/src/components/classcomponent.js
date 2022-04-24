// A class based component
//class App extends React.Component {
//    render() {
//        return <h1>Hello World</h1>
//    }
//}

import React, { Component } from 'react'
import Button from './Button'

export default class Classcomponent extends Component {
    render() {
        return (
            <div>
                <h2>class component</h2>
                <Button props={"class button"} />
                <Button />
            </div>
        )
    }
}
