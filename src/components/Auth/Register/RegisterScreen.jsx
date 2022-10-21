import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <div className='container' >
        <div className='row d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
            <div className='col-sm-4'>
                <div className='mb-5'>
                    <h1 className='text-center'>Register</h1>
                </div>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor="userName" className='form-label'>User Name</label>
                        <input id='userName' className='form-control' type="text" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="mail" className='form-label'>Mail</label>
                        <input id='mail' className='form-control' type='email' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input id='password' className='form-control' type="password" />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button type="submit" className='btn btn-outline-primary'>Create</button> 
                        <Link to='/login'>Log In</Link>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}
