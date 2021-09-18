import classes from "./Hamburger.module.css";

export default function Hamburger({ handleClick,isOpen}: { handleClick: Function, isOpen:boolean }) {
  return (
    <div
      className={classes.container}
      onClick={()=>handleClick()}
    >
      <div className={classes.hamburger}>
        {["top", "mid", "bot"].map((bar) => (
          <div
            key={bar}
            data-name={bar}
            className={classes.bar}
            data-isopen={isOpen}
          />
        ))}
      </div>
    </div>
  );
}