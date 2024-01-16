import { useState} from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.style.scss'
import Button from "../button/button.component";

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    creatUserDocumentFromAuth
} from "../../utils/firebase/firebase.util";

const defaultFormFields = {

    email: '',
    password: '',
}


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await creatUserDocumentFromAuth(user);
    }  

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(
                email,
                password);

            resetFormFields();
            
        } catch (error) {
            console.log(error);
            if (error.code === "auth/invalid-credential") {
                alert("Incorrect Email or Password!");
            }else if (error.code === "auth/popup-closed-by-user"){
                
                console.log("popup closed by user");
            }else{
                console.log(error);
            }

        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>


                <FormInput
                    label="Email"
                    type="email"
                    required onChange={handleChange}
                    name="email"
                    value={email} />

                <FormInput
                    label="Password"
                    type="password"
                    required onChange={handleChange}
                    name="password"
                    value={password} />



                <div className='buttons-container'>

                    <Button type="submit">Sign-In</Button>
                    <Button buttonType='google' onClick={signInWithGoogle}>Google Sign-In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;