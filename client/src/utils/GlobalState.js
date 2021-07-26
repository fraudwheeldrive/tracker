import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";
const StoreContext = createContext();
const { Provider } = StoreContext;
//will be required for cart


// -----------------------------------------------
export const getSavedShowIds = () => {
  const savedShowIds = localStorage.getItem("saved_shows")
    ? JSON.parse(localStorage.getItem("saved_shows"))
    : [];

  return savedShowIds;
};

export const saveShowIds = (showIdArr) => {
  if (showIdArr.length) {
    localStorage.setItem("saved_shows", JSON.stringify(showIdArr));
  } else {
    localStorage.removeItem("saved_shows");
  }
};
//showing error showId is not defined
// export const removeShowId = (showId) => {
//   const savedShowIds = localStorage.getItem("saved_shows")
//     ? JSON.parse(localStorage.getItem("saved_shows"))
//     : null;

//   if (!savedShowIds) {
//     return false;
//   }

//   const updatedSavedShowIds = savedShowIds?.filter(
//     (savedShowId) => savedShowId !== ShowId
//   );
//   localStorage.setItem("saved_shows", JSON.stringify(updatedSavedShowIds));

//   return true;
// };

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};
export { StoreProvider, useStoreContext };
