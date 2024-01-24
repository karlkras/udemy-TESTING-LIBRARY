import {createContext, useContext, useState} from "react";
import {pricePerItem} from "../constants";

const OrderDetails = createContext();

// custom hook to check if we're in a provider.
// eslint-disable-next-line react-refresh/only-export-components
export const useOrderDetails = () => {
  const contextValue = useContext(OrderDetails);

  if (!contextValue) {
    throw new Error("useOrderDetails must be called from withing an OrderDetailsProvider");
  }
  return contextValue;
}

export const OrderDetailsProvider = (props) => {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {},
    toppings: {}
  });

  const updateItemCount = (itemName, newItemCount, optionType) => {
    const optionCountsClone = {...optionCounts};
    optionCountsClone[optionType][itemName] = newItemCount;
    setOptionCounts(optionCountsClone);
  }

  const resetOrder = () => {
    setOptionCounts({
      scoops: {},
      toppings: {}
    })
  }

  const calculateTotal = (optionType) => {
    return Object.values(optionCounts[optionType]).reduce((total,value) => total + value, 0) * pricePerItem[optionType];
  }


  const totals = {
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal("toppings")
  }

  const value = {optionCounts, totals, updateItemCount, resetOrder};
  return <OrderDetails.Provider value={value} {...props} />
}
