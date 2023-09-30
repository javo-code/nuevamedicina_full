import "./categoryListContainer.css";
import { NavLink } from "react-router-dom";


const CategoryListContainer = ({ greeting }) => {
  return (
      
    <div className="category-card-container">
      <div className="category-card">
        <NavLink to='/nutricion' className="BtnCard">
          <div className="img">
            <p className="card-title">Nutrición</p>
            <img src="https://i.ibb.co/f0M3td9/modal-Nutricion.png" alt="" />
          </div>
        </NavLink>
      </div>
      <div className="category-card">
        <NavLink to='/bombas' className="BtnCard">
          <div className="img">
            <p className="card-title">Bombas</p>
            <img src="https://i.ibb.co/6ZQBgd5/Bombas-de-infusion.png" alt="" />
          </div>
        </NavLink>
      </div>
      <div className="category-card">
        <NavLink to='/descartables' className="BtnCard">
          <div className="img">
            <p className="card-title">Descartables</p>
            <img src="https://i.ibb.co/bzQ89pS/descartables.jpg" alt="" />
          </div>
        </NavLink>
      </div>
      <div className="category-card">
        <NavLink to='/servicios' className="BtnCard">
          <div className="img">
            <p className="card-title">Servicios Profesionales</p>
            <div className="banner-serv"></div>
            {/* <img src="https://i.ibb.co/D84MZvq/us.jpg" alt="" /> */}
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default CategoryListContainer;