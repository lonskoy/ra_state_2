import "../css/List.css";

export const ListView = ({ products }) => {
    return (
        <div className="list_Prod">
            {products.map((item, index) =>
                <div className="list_Conteiner" key={index}>
                    <div className="list_Img "><img src={item.img}></img></div>
                    <div className="list_Name ">{item.name}</div>
                    <div className="list_Color ">{item.color}</div>
                    <div className="list_Price  ">${item.price}</div>
                    <div className="list_Button">Add order</div>

                </div>)}
        </div>

    )
}