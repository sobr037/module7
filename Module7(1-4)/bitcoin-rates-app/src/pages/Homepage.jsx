import { Link } from 'react-router-dom'

export default function Homepage() { // Save in pages/Homepage.jsx
  
  return (
    <div className="Homepage">
      <h1>Home Page</h1>
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
