import "./custom-button.styles.scss";

interface Iprops {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  type?: "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: any;
}

const CustomButton: React.FC<Iprops> = ({
  children,
  isGoogleSignIn,
  inverted,
  onClick,
  type,
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
      inverted ? "inverted" : ""
    } custom-button`}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default CustomButton;
