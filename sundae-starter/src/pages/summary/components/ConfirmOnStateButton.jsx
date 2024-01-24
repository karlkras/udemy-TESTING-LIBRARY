import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';

const ConfirmOnStateButton = ({isChecked, setCheck, buttonDisable, checkboxLabel, submitButtonText}) => {
  return (
    <>
      <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            checked={isChecked}
            onChange={() => {setCheck()}}
            label={checkboxLabel}
          />
      </Form.Group>
      <div>
        <Button
          variant="primary"
          type="submit"
          disabled={buttonDisable}
        >{submitButtonText}</Button>
      </div>
    </>
  )
}

ConfirmOnStateButton.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  setCheck: PropTypes.func.isRequired,
  buttonDisable: PropTypes.bool.isRequired,
  checkboxLabel: PropTypes.object.isRequired,
  submitButtonText: PropTypes.string.isRequired
}

export default ConfirmOnStateButton;

