import { createContext, useContext, useState } from "react";

export const favoriteContext = createContext();

export const useAuth = () => {
    const context = useContext(favoriteContext);
    if (!context) throw new Error("No auth provider");
    return context;
  };

function Favoritepag({children}) {
  const [favorites] = useState({
    proyectname: "Donation",
    pymesname: "Nicolás Gómez",
    containertext: "Catchy Caption for people :P",
    money: "$****** / $2000", 
  },
  {
    proyectname: "Donation",
    pymesname: "Nicolás Gómez",
    containertext: "Catchy Caption for people :P",
    money: "$****** / $2000",
  }, 
  {
    proyectname: "Donation",
    pymesname: "Nicolás Gómez",
    containertext: "Catchy Caption for people :P",
    money: "$****** / $2000",
  }
   );

  return (
    <div className="Favoritepag">
      <favoriteContext.Provider
        value={{ favorites }}
      >{children}
      </favoriteContext.Provider>
    </div>
  );
}

export default Favoritepag;
