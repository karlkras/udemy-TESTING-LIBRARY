import {render, screen} from '../../../test-utils/testing-library-utils';
import userEvent from "@testing-library/user-event";
import Options from "../Options";


test("updates scoop subtotal when scoops change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops"/>);

  // make sure to start at a 0 base charge.
  const scoopSubtotal = screen.getByText("Scoops total: $", {exact: false});
  expect(scoopSubtotal).toHaveTextContent("0.00");

  // update the vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {name: "Vanilla"});

  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");

  expect(scoopSubtotal).toHaveTextContent("2.00");

  // update the Mint chip scoops to 2 and check the subtotal
  const mintChipInput = await screen.findByRole("spinbutton", {name: "Mint chip"});

  await user.clear(mintChipInput);
  await user.type(mintChipInput, "2");

  expect(scoopSubtotal).toHaveTextContent("6.00");

});