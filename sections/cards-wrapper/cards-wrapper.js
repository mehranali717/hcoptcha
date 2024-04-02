import classes from "./cards-wrapper.module.css"
const CardsWrapper = ({ children }) => {
  return <div className={classes.cards_wrapper}>{children}</div>;
};
export default CardsWrapper