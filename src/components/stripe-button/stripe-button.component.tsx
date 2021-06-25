import StripeCheckout, { Token } from "react-stripe-checkout";

interface IProps {
  price: number;
}
const StripeCheckoutButton: React.FC<IProps> = ({ price }) => {
  const onToken = (token: Token) => {
    console.log(token);
    alert("Payment Successful");
  };
  const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY!;
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
};

export default StripeCheckoutButton;
