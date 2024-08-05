import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false; 

  return (
    <nav className='Barra'>
      <div className="btn-group me-2" role="group" aria-label="First group">
        <h3>Pizzería Mamma Mia!</h3>
      </div>
      <div className="d-inline-flex gap-1">
        <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ fontSize: 'small' }}>
          <img src='https://web.whatsapp.com/emoji/v1/15/1/2/single/w/64/01f355.png' className='pizzaimg' alt="Home" />Home
        </a>
        {token ? (
          <>
            <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ fontSize: 'small' }}>
              <img src='candado.png' className='pizzaimg' alt="Profile" />Profile
            </a>
            <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ fontSize: 'small' }}>
              <img src='candado.png' className='pizzaimg' alt="Logout" />Logout
            </a>
          </>
        ) : (
          <>
            <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ fontSize: 'small' }}>
              <img src='candado(1).png' className='pizzaimg' alt="Login" />Login
            </a>
            <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ fontSize: 'small' }}>
              <img src='candado(1).png' className='pizzaimg' alt="Register" />Register
            </a>
          </>
        )}
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="#" className="btn btn-outline-primary" role="button" data-bs-toggle="button" aria-pressed="true" style={{ fontSize: 'small' }}>
          <img src='carrito-de-compras.png' className='pizzaimg' alt="Cart" />Total: ${total}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
