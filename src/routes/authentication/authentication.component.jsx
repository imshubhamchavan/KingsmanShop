
import './authentication.style.scss'

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { useEffect } from 'react';

const Authentication = () => {
    useEffect(() => {
        document.title = "Sign In Page | Kingsman Shop";
      })

    return (
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm />
        </div>
    )
}

export default Authentication;