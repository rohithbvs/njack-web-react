import React, { Component } from 'react'


export default class Gsoc extends Component {
    
    render() {
        return (
            <div>
                <hr className="nwoc-aper-line" />
                <br /><br />

                <div className="row-fluid">
                    <div className="col gsochead">
                        GSOC Results @2020
                     </div>
                </div>

                {/* <!-- visible on mobile and sm only --> */}
                <div className="row d-md-none mobile-gsoc" >
                    <div className="col d-flex justify-content-center mobile-gsoc">
                        <img className="img-fluid" src={require('../assets/gsoc.png')} />
                    </div>
                    <div className="row-fluid gsoc-text">
                        <p className="gsoc-para">Google Summer of Code is the most prestigious
                        global program focused on bringing
                    student developers into open source software development.<br /><br />
                    Congrats to all the six students of our institute who have been selected in the year 2020!</p>
                        <button className="btn btn-danger gsoc-results">View Results</button>
                    </div>
                </div>
            </div>
        )
    }
}
