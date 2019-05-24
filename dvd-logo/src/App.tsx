import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import DVDLogo from "./DVDLogo";

const svgWidth = 800;
const svgHeight = 600;

class App extends React.Component {

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Bouncing DVD Logo (SVG + React)</h1>
                </header>
                <p className="App-intro"/>
                <svg width={svgWidth} height={svgHeight} style={{backgroundColor: 'black'}}>
                    <DVDLogo width={svgWidth} height={svgHeight}/>
                </svg>
            </div>
        );
    }
}

export default App;
