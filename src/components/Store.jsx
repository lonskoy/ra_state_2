import { useState } from "react"
import { products } from "../data"
import { IconSwitch } from "./IconSwitch"
import { ListView } from "./ListView";
import { CardsView } from "./CardsView";

export const Store = () => {
    const [icon, setIcon] = useState('view_list');

    const onSwitch = () => {
        if(icon === 'view_list') {
            setIcon('view_module');
            console.log(icon);
        }
        else {
            setIcon('view_list');
            console.log(icon);
        }
    }

    return (
        <div className="conteiner">
            <IconSwitch icon={icon} onSwitch={onSwitch}/>
            {icon === 'view_list' ? <ListView products={products} /> : <CardsView products={products} /> }
        </div>
    );

   

}