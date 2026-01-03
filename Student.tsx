import React, { createContext, useContext , ReactNode} from 'react';

type BalanceContextType  = {
   balance: number;
}

const BalanceContext = createContext<BalanceContextType | null>(null);

const BalanceProvider:React.FC<{children: ReactNode }> = ({ children }) => {
    const balanceData: BalanceContextType = {balance: 500};
  return(
    <BalanceContext.Provider value={balanceData}>
        {children}
    </BalanceContext.Provider>
  )
}

const Student:React.FC = () => {
  const balanceContext = useContext(BalanceContext);

  if(!balanceContext) return<p>No balance info available</p>;

  return<h2>Student Canteen Balance: ₹{balanceContext.balance}</h2>;

};

export default Student;