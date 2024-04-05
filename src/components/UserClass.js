import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.name+"Constructor")
        console.log(props);
        // this.state is a big object which consists of all the state variable
        this.state = {
            count:0,
            count2:2,
            userInfo : {
                name : "Dummy",
                location: "default",
                avatar_url: "http://dummy-photo.com",
            },
        };
    }

    async componentDidMount() {
        console.log(this.props.name+"componentDidMount");
        // Make API call here. React will re-render component once API call's response is received
        const data = await fetch("https://api.github.com/users/waditya");
        const json = await data.json(); // Add await because we are making a promise

        // console.log(json);

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate() {
        console.log("Component Did Update");

        this.timer = setInterval(() => {
            console.log("UserClass - componentDidMount")
        }, 1000); // This will result in performance issues at large scale
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Component Will Unmount")
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className = "user-card">
            <button onClick={() => {
                this.setState({
                    count: this.state.count+1,
                    count2: this.state.count2+2,
                });
            }}>Count Increase
            </button>
            <img src={ avatar_url} />
            <h2>Name :{ name }</h2>
            <h3>Location :  {location}</h3>
            <h4>Contact :  {this.state.userInfo.contact}</h4>
        </div>
        )
    }
}

export default UserClass;