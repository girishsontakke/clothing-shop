import StripeCheckout, { Token } from "react-stripe-checkout";

interface IProps {
  price: number;
}
function StripeCheckoutButton(props: IProps) {
  const { price } = props;
  const onToken = (token: Token) => {
    console.log(token);
    alert("Payment Successful");
  };
  const publishableKey =
    "pk_test_51J5Yq0SCR2r1huHpjb7GzjD4knq20XKQa0kbSTVXbqsgm89jJbyL8GxfyrH39MACzTqRBEosTzNsE2i4d1nFoEul00lkVXwR1u";
  const priceForStripe = 100 * price;
  return (
    <StripeCheckout
      token={onToken}
      stripeKey={publishableKey}
      label="Pay Now"
      name="CRWN Clothing"
      description={`Your total is $${price}`}
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      panelLabel="Pay Now"
    />
  );
}

export default StripeCheckoutButton;
