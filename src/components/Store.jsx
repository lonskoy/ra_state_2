import { useState } from "react"
import { products } from "../data"
import { IconSwitch } from "./IconSwitch"
import { ListView } from "./ListView";
import { CardsView } from "./CardsView";
import "../css/Cards.css";

export const Store = () => {
    const [icon, setIcon] = useState('view_list');

    const onSwitch = (icon) => {
        icon === 'view_list' ? setIcon('view_module') : setIcon('view_list')
        console.log(icon);
    }

    return (
        < div className="conteiner">
            <IconSwitch icon={icon} onSwitch={onSwitch} />
            <div className="conteiner_prod">
                {icon === 'view_list' ? <ListView products={products} /> : <CardsView products={products} />}
            </div>
        </div>
    );



}