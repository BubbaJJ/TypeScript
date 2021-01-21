import { useState } from 'react'
import { loginCredentials } from '../shared/interface/Interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

export const SignInView = () => {
    const history = useHistory()
    const [LogInCredentials, setLogInCredentials] = useState<loginCredentials>({username: '', password: ''})
    
    const signIn = () => {
        history.push(RoutingPath.homeView)
        localStorage.setItem('user', LogInCredentials.username)
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Username" onChange={event => setLogInCredentials({...LogInCredentials, username: event.target.value})}/><br />
                <input type="text" placeholder="Password" onChange={event => setLogInCredentials({...LogInCredentials, password: event.target.value})}/><br/>
                <button onClick={() => signIn()}>Sign In!</button>
            </form>

            <h1>{LogInCredentials.username}</h1>
            <h1>{LogInCredentials.password}</h1>


        </div>
    )
}
