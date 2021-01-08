import React from 'react'

import './item-add-form.css'

export default class ItemAddForm extends React.Component {
    
    state = {
        label:''
    }

    onLabelChange  = (ev) =>{
        // console.log(event.target.value);
        this.setState({
            label: ev.target.value.toUpperCase()
        })
    }

    onSubmit = (ev) =>{
        ev.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label:''
        })
    }

    render(){
    return(
        <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
            {/* {this.state.label} */}
            <input type="text"
                className='form-control'
                onChange={this.onLabelChange}
                placeholder="What needs to be done"
                value={this.state.label} />
            <button 
            className="btn btn-outline-secondary" 
            // onClick={()=> this.props.onItemAdded('hello wrld')} 
            >
            Press me 
        </button>
        </form>
    )
    }
}

