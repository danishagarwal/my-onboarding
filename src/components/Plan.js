import React from 'react'
import './Plan.css'
function Plan() {
  return (
    <>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <div className='Plan'>
        <div className="fcontainer">
          

          <div className="fitem">
            <i className="fa fa-user"></i>
            <br />
            <br />

            <b>For Myself</b>

            <small className="small">
              <br />
              Write better. Think more clearly. Stay organized
            </small>
          </div>

          <div className="fitem">
            <i className="fa fa-group"></i>
            <br />
            <br />

            <b>With my Team</b>

            <small className="small">
              <br />
              Wikis, Docs, Tasks and projects, all in one place
            </small>
          </div>

        </div>
      </div>
    </>
    
  )
}

export default Plan