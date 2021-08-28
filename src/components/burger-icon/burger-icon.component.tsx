import "./burger-icon.styles.scss";

interface Iprops {
  expandNavLinks: () => void;
  expand: boolean;
}

const BurgerIcon: React.FC<Iprops> = ({ expandNavLinks, expand }) => {
  return (
    <div
      className={`burger ${expand ? "open" : ""}`}
      onClick={expandNavLinks}
    ></div>
  );
};

export default BurgerIcon;
