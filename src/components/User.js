import React from 'react'

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false, UserName:''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.handleClickLogout = this.handleClickLogout.bind(this);
    }

    componentDidMount() {
        //this.props.UserName = '';
    }

    handleChange(event) {
        this.setState({UserName: event.target.value.toUpperCase()});
        //event.preventDefault();
    }

    handleSubmitLogin(event) {

        alert('A name was submitted: ' + this.state.UserName);
        this.setState({isLoggedIn: true});
        event.preventDefault();
    }

    handleClickLogout() {
        this.setState({isLoggedIn: false, UserName:''});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const UserName = this.state.UserName;
        return(
            <div>
                {isLoggedIn ? (
                    <div>
                        <h1>Username: {UserName}</h1>
                        <button onClick={this.handleClickLogout} >Logout</button>
                    </div>
                ) : (
                    <form onSubmit={this.handleSubmitLogin}>
                        <label>
                            Name:
                            <input type="text" value={UserName} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Login" />
                    </form>
                )}
            </div>
        )
    }
}