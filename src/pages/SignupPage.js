import FormHeader from "../component/FormHeader";
import Signup from "../component/Signup"

export default function SignupPage(){
    return(
        <>
            <Header 
                heading="Signup to vreate and account"
                paragraph="Already have an account click login"
                linkName="Login"
                linkUrl="/Login"
            />
            <Signup/>
        </>
    )
}