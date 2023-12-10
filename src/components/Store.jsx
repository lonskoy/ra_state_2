import { useState } from "react"
import { products } from "../data"
import { IconSwitch } from "./IconSwitch"
import { ListView } from "./ListView";
import { CardsView } from "./CardsView";

export const Store = () => {
    const [icon, setIcon] = useState('view_list');

    const onSwitch = (icon) => {
        icon === 'view_list' ? setIcon('cards_list') :  setIcon('view_list')
    }

    return (
        <div className="conteiner">
            <IconSwitch icon={icon} onSwitch={onSwitch}/>
            {icon === 'view_list' ? <ListView products={products} /> : <CardsView products={products} /> }
        </div>
    );

   

}