import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log("Constructor")
        console.log(props);
        // this.state is a big object which consists of all the state variable
        this.state = {
            count:0,
            count2:2
        };
    }

    componentDidMount() {
        console.log("Parent componentDidMount");
        // Make API call here 
    }

    render() {
        console.log("Inside render method of UserClass");
        return (
            <div className = "user-card">
            <button onClick={() => {
                this.setState({
                    count: this.state.count+1,
                    count2: this.state.count2+2,
                });
            }}>Count Increase
            </button>
            <h1>Count : {this.state.count}</h1>
            
            <h1>Count2 : {this.state.count2}</h1>
            <h2>Name :{ this.props.name}</h2>
            <h3>Location :  {this.props.location}</h3>
            <h4>Contact :  {this.props.contact}</h4>
        </div>
        )
    }
}

export default UserClass;