import React from 'react'

function Card() {
  return (
    <div>
      <div><div className="card mt-3 " style={{"width": "18rem", "maxHeight" : "360px"}}>
          <img src="https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Important Text</p>
            <div className="container w-100">
              <select name="" id="" className='m-2 h-100 bg-success rounded'>
                {
                  Array.from(Array(6),(e,i)=>{
                    return(
                      <option value={i+1} key={i+1}>{i+1}</option>
                    )
                  })
                }
              </select>

              <select name="" id="" className='m-2 h-100 bg-success rounded'>
                <option value="Half" >Half</option>
                <option value="Full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total</div>
            </div>
          </div>
      </div></div>
    </div>
  )
}

export default Card
