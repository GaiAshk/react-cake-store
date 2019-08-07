import React from 'react';
import './gameoflife.css';
import { ButtonToolbar, Dropdown, DropdownButton } from 'react-bootstrap';

export class Buttons extends React.Component {

    handleSelect = (evt) => {
        this.props.gridSize(evt);
    };

    render() {
        return (
            <div className="center">
                <ButtonToolbar>
                    <button className="btn btn-default mx-1" onClick={this.props.playButton}>
                        Play
                    </button>
                    <button className="btn btn-default mx-1" onClick={this.props.pauseButton}>
                        Pause
                    </button>
                    <button className="btn btn-default mx-1" onClick={this.props.clear}>
                        Clear
                    </button>
                    <button className="btn btn-default mx-1" onClick={this.props.slow}>
                        Slow
                    </button>
                    <button className="btn btn-default mx-1" onClick={this.props.fast}>
                        Fast
                    </button>
                    <button className="btn btn-default mx-1" onClick={this.props.seed}>
                        Seed
                    </button>
                    <DropdownButton
                        title="Grid Size"
                        id="size-menu"
                        onSelect={this.handleSelect}
                    >
                        <Dropdown>
                            <Dropdown.Item eventKey="1">20x10</Dropdown.Item>
                            <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
                            <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
                        </Dropdown>

                    </DropdownButton>
                </ButtonToolbar>
            </div>
        )
    }
}