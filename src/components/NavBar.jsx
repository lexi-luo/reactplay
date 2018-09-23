import React from 'react';


//stateless functional component instead of class, need to pass props and remove this
//destructuring so you can remove props.everything

const NavBar = ({ totalCounters }) => {
  console.log('navbar -rendered')
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar
          <span className="badge badge-pill badge secondary">{totalCounters}</span>
        </a>
      </nav>
    </div>
  );
}

// class NavBar extends Component {

//   render() {

//   }
// }

export default NavBar;