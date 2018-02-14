import React, { Component } from 'react';
import $ from 'jquery';

class Login extends Component {
        render() {
                return (
                        <div className='login-form-container'>
                                <form onSubmit={this.submitForm}>
                                        <div className="input-container">
                                                <input type="text" placeholder='Username' onChange={this.updateUsername}/>
                                        </div>  
                                        <div className="input-container">                                      
                                                <input type="password" placeholder='Password' onChange={this.updatePassword} />
                                        </div>
                                        <div className="input-container">
                                                <input type="submit" value="Login" />
                                        </div>                                        
                                </form>
                                
                        </div>
                )
        }

        updateUsername(event) {
                this.setState({ 'username' : event.target.value});
        }

        updatePassword(event) {
                this.setState({ 'password' : event.target.value});
        }

        submitForm(event) {
                event.preventDefault();
                fetch('https://putsreq.com/kTdx7ZRlzmkKhvT0OlEr',{
                        method: 'post',
                        body: JSON.stringify({
                                'username': this.state.username,
                                'password': this.state.password
                        })
                }).then(res => res.json()).then(function(data) { 
                        console.log(data);
                        alert(JSON.stringify(data));
                 });

                //  fetch('https://1nimmg3p7f.execute-api.us-east-1.amazonaws.com/prod/aboveline_jr_test_service', {
                //         method: 'POST',
                //         headers: {
                //           Accept: 'application/json',
                //           'Content-Type': 'application/json',
                //         },
                //         mode: "cors", 
                //         redirect: 'follow',
                //         body: JSON.stringify({
                //           username: this.state.username,
                //           password: this.state.password
                //         }),
                //       }).then(res => res.json()).then(function(data) { 
                //         console.log(data);
                //         alert(JSON.stringify(data));
                //  });

                var obj = {
                        'username': this.state.username,
                        'password': this.state.password
                };
                $.ajax({
                        type: 'POST',
                        url: 'https://1nimmg3p7f.execute-api.us-east-1.amazonaws.com/prod/aboveline_jr_test_service',
                        contentType: "application/json;",
                        dataType: "json",
                        xhrFields: {
                                withCredentials: true
                        },
                        data: JSON.stringify(obj),
                        success: function(res) {
                                alert(res);
                        }
                })
        }

        constructor(props) {
                super(props);
                this.state = {
                        username: '',
                        password: ''
                };
                this.updateUsername = this.updateUsername.bind(this);
                this.updatePassword = this.updatePassword.bind(this);
                this.submitForm     = this.submitForm.bind(this);
        }
}

export default Login;