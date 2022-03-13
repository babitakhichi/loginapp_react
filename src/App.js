import './App.css';
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')



  const handleSubmit = event => {
    event.preventDefault();
    // localStorage.setItem('success', "Register Successfully")
    localStorage.setItem('Name', JSON.stringify({ name }));
    localStorage.setItem('Email', JSON.stringify({ email }));
  };
  return (
    <div >
      <center>
        <form onSubmit={handleSubmit}>
          <table>
            
              <tr>
                <td>
                  User Name:
                </td>
                <td>
                  <input type='text'
                    name='name'
                    placeholder='Enter Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Email Address:
                </td>
                <td>
                  <input type='email'
                    name='email'
                    placeholder='Enter email'
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Password:
                </td>

                <td>
                  <input type='password' name='password'
                  
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </td>
              </tr>
            
          </table>
          <button type="submit">
            Submit
          </button>
        </form>
      </center>
    </div>
    //    <form onSubmit={handleSubmit} name='form'>
    //    <div>
    //      <label>Email address</label>
    //      <input
    //        type="email"
    //        name="email"
    //        placeholder="Enter email"
    //        onChange={handleEmailChange}
    //        value={email} onChange={(e) => setEmail(e.target.value)} 
    //      />
    //      <label>password</label>
    //      <input
    //        type='password'
    //        name='password'
    //        placeholder='Enter Password'
    //        value={password}
    //        onChange={(e) => setPassword(e.target.value)} 
    //      />
    //    </div>
    //    <button type="submit">
    //      Submit
    //    </button>
    //  </form>

  );
}

export default App;
