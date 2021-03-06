import React, { Component } from 'react'
import Homepage from './Homepage'
import Topnav from './Topnav'
import About from './About'
import Events from './Events'
import Collab from './Collab'
import Footer from './Footer'
import Gsoc from './Gsoc'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Topnav />
                <div className="container-fluid main-container">
                    <div className="sidebaricon d-none d-lg-block">
                        <img src={require('../assets/Instagram – 1.png')} /><br /><br />
                        <img src={require('../assets/Facebook – 1.png')} /><br /><br />
                        <img src={require('../assets/Twitter – 1.png')} /><br /><br />
                        <img src={require('../assets/Github – 1.png')} />
                    </div>
                    <Homepage />
                    <About />
                    <Events />
                    <Gsoc />
                    <Collab />
                    <Footer />
                </div>
            </div>

        )
    }
}
