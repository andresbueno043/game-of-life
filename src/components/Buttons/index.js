import React from "react";
import { ButtonToolbar, MenuItem, DropdownButton, Button } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

class Buttons extends React.Component {

  handleSelect = (evt) => {
    this.props.gridSize(evt);
  }

  render(){

    return(
      <div className="center">
        <ButtonToolbar>
          <button
          className="btn btn-default"
          onClick={this.props.playButton}
          > 
            PLAY 
          </button>
          <button
          className="btn btn-default"
          onClick={this.props.pauseButton}
          > 
            PAUSE
          </button>
          <button
          className="btn btn-default"
          onClick={this.props.clear}
          > 
            CLEAR
          </button>
          <button
          className="btn btn-default"
          onClick={this.props.slow}
          > 
            SLOW
          </button>
          <button
          className="btn btn-default"
          onClick={this.props.fast}
          > 
            FAST
          </button>
          <button
          className="btn btn-default"
          onClick={this.props.seed}
          > 
            SEED
          </button>

          <DropdownButton
          title= 'Grid Size'
          id='size-menu'
          onSelect={this.handleSelect}

        >
          <DropdownItem eventKey='1'> 20x10</DropdownItem>
          <DropdownItem eventKey='2'> 50x30</DropdownItem>
          <DropdownItem eventKey='3'> 70x50</DropdownItem>
        </DropdownButton>
        </ButtonToolbar>
      </div>
    )
  }
}

export {Buttons}