import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function registerUser(event) {

    event.preventDefault()
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await response.json()

    // console.log(data)
    if(data.status === 'ok'){
      navigate('/login')
    }
  }

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card bg-dark text-white my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold b-2 text-uppercase ">Register</h2>
                <Form className='mt-4' onSubmit={registerUser}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <div className='d-flex justify-content-center mb-4'>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        I have read and agree to the terms
                      </label>
                    </div>
                  </div>

                  <Button className="mb-4 w-100" variant="outline-light" type="submit" value="Register">Register</Button>
                  <p className='text-center'>or</p>
                  <div className='d-flex flex-row mt-3 mb-5'>
                    <Button tag='a' className='m-3' style={{ color: 'white', backgroundColor: 'black', border: 'none' }}>
                      <i className="fa-brands fa-facebook"></i>
                    </Button>

                    <Button tag='a' className='m-3' style={{ color: 'white', backgroundColor: 'black', border: 'none' }}>
                      <i className="fa-brands fa-twitter"></i>
                    </Button>

                    <Button tag='a' className='m-3' style={{ color: 'white', backgroundColor: 'black', border: 'none' }}>
                      <i className="fa-brands fa-google"></i>
                    </Button>
                    <Button tag='a' className='m-3' style={{ color: 'white', backgroundColor: 'black', border: 'none' }}>
                      <i className="fa-brands fa-github"></i>
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;