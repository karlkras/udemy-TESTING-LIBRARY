import axios from 'axios';
import {useEffect, useState} from "react";
import ScoopOption from "./ScoopOption";
import {Row} from "react-bootstrap";
import ToppingOption from "./ToppingOption";
import PropTypes from 'prop-types';
import AlertBanner from "../common/AlertBanner";
import {pricePerItem} from "../../constants";
import {toCurrency} from "../../utilities";
import {useOrderDetails} from "../../contexts/OrderDetails";


const Options = ({optionType}) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const { totals } = useOrderDetails()


  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`)
      .then(response => setItems(response.data))
      .catch(error => {
        setError(true);
      });
  }, [optionType]);

  if (error) {
    return <AlertBanner/>
  }

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map(anItem => (
      <ItemComponent
        key={anItem.name}
        name={anItem.name}
        imagePath={anItem.imagePath}
      />
    )
  );


  return (
    <>
      <h2>{title}</h2>
      <p>{`${toCurrency(pricePerItem[optionType])} each`}</p>
      <p>{`${title} total: ${toCurrency(totals[optionType])}`}</p>
      <Row>{optionItems}</Row>
    </>);
}

Options.propTypes = {
  optionType: PropTypes.string

}

export default Options;
