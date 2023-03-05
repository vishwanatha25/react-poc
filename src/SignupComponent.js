import React from "react";

class SingupComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    render() {
        const { username, email, password, confirmPassword } = this.state;
        return(
        <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    value={username} 
                    name="username"
                    onChange={e => this.setState({ username: e.target.value })}    
                />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    placeholder="yourmailid@email.com.br"
                    onChange={e => this.setState({ email: e.target.value })}    
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    value={password} 
                    name="password" 
                    onChange={e => this.setState({ password: e.target.value })}
                />
            </div>
            <div className="input-group">
                <label htmlFor="cnf-password">Confirm Password</label>
                <input 
                    type="password" 
                    value={confirmPassword} 
                    name="cnf-password"
                    onChange={e => this.setState({ confirmPassword: e.target.value })} 
                />
            </div>
            <button type="submit" className="primary">Singup</button>
        </form>
        );
    }

    emailValidation(){
        const regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if(!this.state.email || regex.test(this.state.email) === false) {
            return false;
        }
        return true;
    }
    
    usernameValidation(){
        if(!this.state.username || this.state.username.length < 3) {
            return false;
        }
        return true;
    }

    validateForm = () => {
        if(this.emailValidation() && this.usernameValidation()) {
            return true;
        }
        return false;
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
        const formValidation = this.validateForm();
        if(formValidation){
            console.log("valid form and procced");
        } else {
            console.log("invalid form");
        }
    }
}

export default SingupComponent;