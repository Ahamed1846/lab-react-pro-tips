import { useState } from 'react';

function About() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    let formIsValid = true;

    if (name === '') {
      setError(prevState => ({
        ...prevState,
        name: 'Name is required'
      }));
      formIsValid = false;
    } else {
      setError(prevState => ({
        ...prevState,
        name: ''
      }));
    }

    if (email === '') {
      setError(prevState => ({
        ...prevState,
        email: 'Email is required'
      }));
      formIsValid = false;
    } else {
      setError(prevState => ({
        ...prevState,
        email: ''
      }));
    }

    if (password === '') {
      setError(prevState => ({
        ...prevState,
        password: 'Password is required'
      }));
      formIsValid = false;
    } else {
      setError(prevState => ({
        ...prevState,
        password: ''
      }));
    }

    if (formIsValid) {
      setSubmitted(true)
    }
  }

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {submitted && <p>Registration successful!!</p>}
        <input type="text" name="name" placeholder='Name' value={name} onChange={handleName} />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        <input type="text" name="email" placeholder='Email ID' value={email} onChange={handleEmail} />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        <input type="text" name="password" placeholder='Password' value={password} onChange={handlePassword} />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default About