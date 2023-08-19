import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div class="header">
        <h1>Twitter 2.0</h1>
        <div class="menu">
          <a href='/'>Login</a>
          <a href='/posts'>Feed</a>
        </div>
        
        <div class="login-form">
          <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" />
            <br />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
    </div>
  )
}
