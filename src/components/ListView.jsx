export const ListView = (products) => {
    return (
    products.map((item, index) => {
            <div className="cardList" key={index}>
                <div className="cardList_Img"><img src={item.img}></img></div>
                <span className="cardList_Name">{item.name}</span>
                <span className="cardList_Color">{item.name}</span>
                <span className="cardList_Price">`${item.price}`</span>
                <span className="cardList_Button">Add to card</span>
            </div>
        })
    );
}