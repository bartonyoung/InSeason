import React from 'react';

const navItems = [
  {
    title: 'Login',
  },
  {
    title: 'Favorites',
  },
  {
    title: 'Popular',
  },
];

const componentStyles = {
  navBarContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '80px',
    border: '1px red solid',
  },

  innerNavWrapper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'flex-row',
  },

  navItem: {
    padding: '5px',
    margin: '0px 10px',
  },
};

const renderNavItems = (items) => items.map(navItem => <a href="#" style={componentStyles.navItem}><div>{navItem.title}</div></a>);


const NavBar = () => (
  <div style={componentStyles.navBarContainer}>
    <div style={componentStyles.innerNavWrapper}>
      {renderNavItems(navItems)}
    </div>
  </div>
);

export default NavBar;
