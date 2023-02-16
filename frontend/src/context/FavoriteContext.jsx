import { createContext, useContext, useState } from "react";

export const favoriteContext = createContext();

export const useFavorite = () => {
  const context = useContext(favoriteContext);
  if (!context) throw new Error("No auth provider");
  return context;
};

function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(
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
    },
    {
      proyectname: "Donation",
      pymesname: "Nicolás Gómez",
      containertext: "Catchy Caption for people :P",
      money: "$****** / $2000",
    }
  );

  return (
    <favoriteContext.Provider value={{ favorites }}>
      {children}
    </favoriteContext.Provider>
  );
}

export default FavoriteProvider;
