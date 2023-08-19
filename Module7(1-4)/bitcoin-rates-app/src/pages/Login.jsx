import { Link } from 'react-router-dom'

export default function Login() { // Save in pages/Homepage.jsx
  
    return (
      <div className="Login">
        <h1>Login to your user account</h1>
  
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/bitcoin">Bitcoin Rates</Link>
        </p>
      </div>
    )
  
  }