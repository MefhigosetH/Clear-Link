import React from 'react';

export default class Navbar extends React.Component {

  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    };
  }

  render() {
    return (
      <nav className="navbar is-success" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">ClearLink</a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="primaryNavbar" href="#">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="primaryNavbar" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Inicio
            </a>

            <a className="navbar-item" href="https://github.com/MefhigosetH/Clear-Link">
              C&oacute;digo
            </a>

          </div>
        </div>

      </nav>
    );
  }
}
