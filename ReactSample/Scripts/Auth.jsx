class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { UserName: "", Password: "" };
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    login(e) {
        alert(`You got successfull login U: ${this.state.UserName} and P: ${this.state.Password}`);
    }
    render() {
        return (
            <div>
                <div>
                    <label>User Name</label>
                    <input type="text" placeholder="user name" name="UserName" value={this.state.UserName} onChange={this.handleChange.bind(this)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="Password" value={this.state.Password} onChange={this.handleChange.bind(this)} />
                </div>
                <button className="login" onClick={this.login.bind(this)}>Log In</button>
            </div>
        );
    }
}
class AuthBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showLogin: false };
    }
    login(e) {
        this.setState({ showLogin: true })
    }
    render() {
        return (
            <React.Fragment>
                <div style={{ "display": this.state.showLogin ? "none" : "" }}>
                    <button className="login" onClick={this.login.bind(this)}>Show Log In</button>
                </div>
                <div style={{ "display": this.state.showLogin ? "" : "none" }}>
                    <Login />
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<AuthBox />, document.getElementById('content'))