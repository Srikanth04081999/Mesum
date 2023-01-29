import React from 'react'
// import { Link } from 'react-router-dom'

const Shopcard = ({shopdata}) => {
  return(

    <>
  
  <h1 className='heading'>RECENTLY ADDED</h1>

  <section className="main-card">

      {shopdata.map((curElem)=>{

        return(
          <div className="card-container">
                <div className="card ">
                  
                  <div className="card-body">
                    <img src={curElem.image} alt="images" className="card-media" />
                    <h2 className="card-title"> {curElem.name}</h2>
                    <p className="card-description subtle">
                      {curElem.description}
                    </p>
                     </div>
                  
            
                </div>
              </div>
        )

      })}
      </section>
    </>
  )
  
}

export default Shopcard
