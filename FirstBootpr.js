import React from 'react'
import 'D:/reactapp2/reactprojects/node_modules/bootstrap/dist/css/bootstrap.min.css';

function FirstBootpr() {
    return (
        <>
      
       <h1 className='m-lg-3 text-monospace text-danger'> First Bootstrap Project</h1>
       <div className="container">
     <div className="row">
    <div class="col-sm" style={{boxShadow:'grey 0px 0px 0px 0px'}}>
    <div className="card" style={{width:'18rem'}} style={{boxShadow:'grey 0px 0px 10px 1px'}}>
  <img src="https://picsum.photos/200/302" class="card-img-top" alt="..." 
      height='250px'
  />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm" style={{boxShadow:'grey 0px 0px 0px 0px'}}>
    <div className="card" style={{width:'18rem'}} style={{boxShadow:'grey 0px 0px 10px 1px'}}>
  <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." 
      height='250px'
  />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm" >
    <div className="card" style={{width:'18rem'}} style={{boxShadow:'grey 0px 0px 10px 1px'}}>
  <img src="https://picsum.photos/202/300" class="card-img-top" alt="..." 
      height='250px'
  />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
     </div>
    </div>

        </>
    )
}

export default FirstBootpr
