
import "../css/Cards.css";

export const CardsView = ({ products }) => {
    return (
        <div className="card_Prod">
            {products.map((item, index) =>
                <div className="cardConteiner" key={index}>
                        <div className="cardList_Name ">{item.name}</div>
                        <div className="cardList_Color ">{item.color}</div>
                        <div className="cardList_Img "><img src={item.img}></img></div>
                        <div className="cardList_footer">
                            <div className="cardList_Price  ">${item.price}</div>
                            <div className="cardList_Button">Add order</div>
                        </div>
                </div>)}
        </div>)}        
        
