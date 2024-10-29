import login from '../../images/loginimage.png'
import './signup.css'
import Checkbox from 'react-custom-checkbox';
import CheckIcon from '@mui/icons-material/Check';
import {useState} from "react";
import {Person, VisibilityOffOutlined, VisibilityOutlined} from "@mui/icons-material";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
const Signup = () => {
    const [checked, setChecked] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const toggleVisibility = () => setPasswordVisible(e => !e);
    const handleChecked = (value) => setChecked(value);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [firstName, setfirstName] = useState()
    const [lastName, setLastName] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        // e.preventDefault()
        axios.post('http://localhost:3001/signup', {email,password, firstName, lastName})
            .then(result =>{
                console.log(result)
                if(result.data === 'success'){
                    navigate('/login')
                }
            })
    }
    return (
        <div className='login' style={{background:'#392381', height:'100vh', width:'100vw'}} >
            <div className={'left-side'}>
                <img src={login} alt=""/>
            </div>
            <div className={'right-side'}>
                <div className="login-form" style={{height:'100%', width:'100%', display: 'flex', alignItems:"center", justifyContent:"center"}}>
                    <form action="" onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>
                        <div style={styles.inputContainer}>
                            <div style={{
                                display:"flex",
                                gap:'20px',
                                paddingBottom:'10px',
                                textAlign:'justify'
                            }}>
                                <div>
                                    <label htmlFor="email">First Name</label>
                                    <div className={'input-field'}>
                                        <input type="text" name='firstName' placeholder='First Name' onChange={(e) => {
                                            setfirstName(e.target.value)
                                        }}/>
                                        <Person style={{color: 'white'}} fontSize={'22'}/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email">Last Name</label>
                                    <div className={'input-field'}>
                                        <input type="text" name='lastName' placeholder='Last Name' onChange={(e) => {
                                            setLastName(e.target.value)
                                        }}/>
                                        <Person style={{color: 'white'}} fontSize={'22'}/>
                                    </div>
                                </div>


                            </div>

                            <label htmlFor="email">Your Email</label>
                            <div className={'input-field'}>
                                <input type="email" name='email' placeholder='Email Address' onChange={(e) => {
                                    setEmail(e.target.value)
                                }}/>
                                <Person style={{color: 'white'}} fontSize={'22'}/>
                            </div>
                        </div>
                        <div style={styles.inputContainer}>
                        <label htmlFor="password">Your Password</label>
                            <div className={'input-field'}>
                                <input type={passwordVisible ? "text" : "password"} name='password'
                                       placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                                <button
                                    onClick={toggleVisibility}
                                    type={'button'}>
                                    {
                                        passwordVisible
                                            ?
                                            <VisibilityOffOutlined fontSize={'22'} style={{color: 'white'}}/>
                                            :
                                            <VisibilityOutlined fontSize={'22'} style={{color: 'white'}}/>
                                    }
                                </button>
                            </div>
                        </div>

                        <div style={styles.bottomContent}>
                            <div className={'remember'}>
                                <Checkbox
                                    className={'checkbox'}
                                    borderColor={"rgba(255, 255, 255, 0.33)"}
                                    icon={<CheckIcon fontSize={'18'} style={{color: 'white'}}/>}
                                />
                                <p>Remember me</p>
                            </div>
                            <Link style={styles.forgotText} to={""}>Forgotten?</Link>
                        </div>
                        <button className={'loginBtn'} type={'button'}>Sign Up</button>
                        <p style={{textAlign:'center', alignSelf:"center", color:'#fff', marginTop: 20, fontSize:14}}>Already have an account?</p>
                        <button className={'signupBtn'} type={'button'}><Link to={ '/login'}>Log In</Link></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const styles = {
    inputContainer:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        marginTop:20,
        gap:10,
        color:'#fff'
    },
    bottomContent:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width:'100%',
        marginTop: 24,
        fontSize: 14
    },
    forgotText:{
        color:'#fff',
        textDecoration:'none',
        // fontSize: 16
    }
}
export default Signup;