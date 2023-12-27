import Header from "../component/FormHeader";
import Signup from "../component/Signup"

export default function SignupPage(){
    return(
        <>
            <Header 
                heading="Sign-up to create and account"
                paragraph="Already have an account click login"
                linkName="Login"
                linkUrl="/Login"
            />
            <Signup/>
        </>
    )
}