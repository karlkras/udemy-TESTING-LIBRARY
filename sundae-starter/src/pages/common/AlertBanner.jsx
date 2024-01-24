import {Alert} from "react-bootstrap";
import PropTypes from 'prop-types';

const AlertBanner = ({message, variant}) => {
  const alertMessage = message ?? "An unexpected error occurred. Please try again later.";
  const alertVariant = variant ?? "danger";

  return (
    <Alert
      variant={alertVariant}
      style={{backgroundColor: "red"}}
    >
      {alertMessage}
    </Alert>

  )
}

AlertBanner.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.string
}

export default AlertBanner;