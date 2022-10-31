import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
});

interface Iprops {
  children?: React.ReactNode;
}
const CartContextProvider: React.FC<Iprops> = ({ children }) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const toggleHidden = () => {
    setHidden((prevHidden) => !prevHidden);
  };
  return (
    <CartContext.Provider value={{ hidden, toggleHidden }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
