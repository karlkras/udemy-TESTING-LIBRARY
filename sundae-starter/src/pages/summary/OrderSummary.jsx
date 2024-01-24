import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { toCurrency } from "../../utilities";

const OrderSummary = () => {
  const { totals, optionCounts } = useOrderDetails();

  const scoopList = Object.entries(optionCounts.scoops).map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));
  const toppingList = Object.keys(optionCounts.toppings).map(key => (
    <li key={key}>
      {key}
    </li>
  ));

  return (
    <>
      <h1>Order Summary</h1>
      <h2>`Scoops: {toCurrency(totals.scoops)}`</h2>
      <ul>{scoopList}</ul>
      <h2>`Toppings: {toCurrency(totals.toppings)}`</h2>
      <ul>{toppingList}</ul>
      <SummaryForm/>
    </>
  );
};

export default OrderSummary;
