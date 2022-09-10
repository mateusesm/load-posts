//import { Component } from "react";

import './style.css'

export const Button = ({ text, loadMorePosts, disabled }) => {

    return (

        <button 
        
            disabled={disabled}
            className="button"
            onClick={loadMorePosts} 
            
        >

            {text}
            
        </button>

    )

}

/*export class Button2 extends Component {

    render() {

        const { text, loadMorePosts, disabled } = this.props

        return(

            <button 
            
                disabled={disabled}
                className="button"
                onClick={loadMorePosts} 
                
            >

                {text}
                
            </button>

        )

    }

}*/