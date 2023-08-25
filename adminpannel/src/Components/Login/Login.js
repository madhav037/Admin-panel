import './Login.css'

export default function Login() {
    return (
        <>
            <div className='Logo-bar'>Netflix</div>
            <div className='Signin-box'>
                <div className='signin-text'></div>
                <div className='email-phonenumber'></div>
                <div className='password'></div>
                <button className='sign-in'>Sign in</button>
                <div>
                    <input type='checkbox' className='remeber-me'/>Remember me
                    <p className='need-help'>Need help?</p>
                </div>
            </div>
        </>
    )
}