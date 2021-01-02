import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPass: false
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    hanldeShowPassword = () => {
        const show = this.state.showPass;
        this.setState({ showPass: !show });
    }

    render() {
        return (
            <div className="sign-in" onSubmit={this.handleSubmit}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type={this.state.showPass ? "text" : "password"}
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <div
                        className="hide-and-show-password-container"
                        onChange={this.hanldeShowPassword}
                        htmlFor="checkpass"
                    >
                        <input
                            type="checkbox"
                            className="hide-and-show-password"
                            id="checkpass"
                        />
                        <label
                            className="hide-and-show-password-text"
                        >
                            Show password
                        </label>
                    </div>
                    <div className="buttons">
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> {''} Sign in with Google {''} </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;