import { Component } from "react";

class ErrorBoundary extends Component {

    constructor(props){
        super(props) ;
        this.state ={hasError:false}
    }

    static getDerivedStateFromError(error){
        return {hasError:true}
    }

    componentDidCatch(error,info){
        //log to log server
        console.log(`Error :${error} `) ;
        console.log(`Error Information :  ${JSON.stringify(info)}`)
    }

    render(){
        if(this.state.hasError){
            return <h1 style={{color:'red'}}> 
            Oops! Something went wrong</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary

