import React, {Component} from 'react';
import './gameoflife.css';
import {Main} from './GameOfLifeIndex'


export class GameOfLifePage extends Component {
    render() {
        return (
           <React.Fragment>
               <Main/>
           </React.Fragment>

        );
    }
}