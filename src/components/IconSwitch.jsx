import "../App.css";

export const IconSwitch = ({icon, onSwich}) => {
    return (
        <span className="material-icons" onClick={onSwich}>{icon}</span>
    );
}