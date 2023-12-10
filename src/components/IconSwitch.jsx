import "../App.css";

export const IconSwitch = ({icon, onSwitch}) => {
    return (
        <span className="material-icons" onClick={() => onSwitch(icon)}>{icon}</span>
    );
}