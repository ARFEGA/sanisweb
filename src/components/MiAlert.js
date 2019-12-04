import React, { Component } from 'react'

class MiAlert extends Component {
    state={
        isActive:true
    }
     hideAlert(){
        this.setState({
            isActive:false
        })
    }
    
    render() { 
        
        if(this.state.isActive){
            const {success,msgHead,msg} = this.props
            const kindSuccess=success ? "alert-success" : "alert-danger"
            const clases = `alert ${kindSuccess} alert-dismissible fade show`
            return ( 
                <div className={clases} role="alert" onClose>
                    <h4 className="alert-heading">{msgHead}</h4>
                    {msg}
                    <button onClick={() => this.hideAlert()} type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }
        return <div/>
    }
}
 
export default MiAlert;