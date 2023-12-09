import Header from "../component/FormHeader"
import Login from "../component/login"


export default function LoginPage(){
    return(
        <>
            <Header
                heading="login to your account"
                paragraph="Don't have and account yet??"
                linkName='Signup'
                linkUrl="/signup"
                />
            <Login/>
        
        </>
    )
}