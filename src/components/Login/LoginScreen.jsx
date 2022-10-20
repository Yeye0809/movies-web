import React from 'react'

export const LoginScreen = () => {
  return (
    <div className='container'>
        <div className='row d-flex justify-content-center'>
            <div className='col-sm-4'>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor="userName" className='form-label'>User Name</label>
                        <input id='userName' className='form-control' type="text" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input id='password' className='form-control' type="password" />
                    </div>
                    <div>
                        <input type="submit" className='btn btn-primary' />
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}
