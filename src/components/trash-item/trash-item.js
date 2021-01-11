import React, {Component } from "react"

import './trash-item.css'

export default class TrashItem extends Component {

    render(){

        return(
            <div className="trash-item d-flex">
                <button 
                className="btn btn-outline-secondary" 
                // onClick={()=> this.props.onItemAdded('hello wrld')}
                >
                    Trash
                    <i className="fa fa-trash-o" aria-hidden="true" />
                </button>
            </div>
        )
    }
}