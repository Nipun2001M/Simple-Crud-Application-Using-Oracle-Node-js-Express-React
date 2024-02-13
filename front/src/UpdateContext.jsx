import { createContext, useState } from 'react';

const UpdateContext = createContext(null);

export const UpdateProvider = ({ children }) => {
    const [select,SetSelect]=useState('select')
    
  return (
    <UpdateContext.Provider value={{ select,SetSelect}}>
      {children}
    </UpdateContext.Provider>
  );
};
export { UpdateContext };