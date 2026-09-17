import React, { useContext } from 'react';
import HeaderContext from './HeaderContext';

const Header = () => {
  const { title } = useContext(HeaderContext);

  return (
    <header className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;