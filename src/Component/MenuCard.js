import React from "react";
import { Link } from "react-router-dom";

const MenuCard = ({ menuData}) => {

  return (
    <>
          <div className='search'>
              <form action="/action_page.php">
              <input type="text" placeholder="Search for objects and more..." name="search"/>
              </form>
              </div> 
      <section className="main-card--cointainer">

        {menuData.map((curElem) => {
          const {id,name,years,image, description } = curElem;
            <hr/>
          return (
            <>
              <div className="card-container" key={id}>
                <Link to={{pathname:'/curElem/${id}',state:{ curElem:curElem}}}>
                <div className="card ">
                  <div className="card-body">
                    <img src={image} alt="images" className="card-media" />
                    <h2 className="card-title"> {name} <span className="year">{years}</span></h2>
                     
                    <p className="card-description subtle">
                      {description}
                    </p>
                  </div>
                  
                  
                </div>
                
                </Link>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;