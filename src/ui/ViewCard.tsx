import { FC } from "react"
import { IItems } from "../models"
// import { ListingProps } from "../models"

interface IViewCardProps {
  item: IItems
}

export const ViewCard:FC<IViewCardProps> = (props) => {
  const { listing_id, url, MainImage,  title, currency_code, price, quantity } = props.item
  return (
  <div className="item" key={listing_id}>
    <div className="item-image">
      <a href={url}>
        <img src={MainImage} />
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{title.length <= 50 ? title : title.slice(0, 49) + "..." }</p>
      <p className="item-price">{currency_code === "USD" ? `$${price}` : (currency_code === "EUR" ? `€${price}` : `GBP ${price}`)}</p>
      <p className={"item-quantity level-"+ (quantity <= 10 ? "low" : (quantity <= 20 ? "medium" : "high"))}>{quantity} left</p>
    </div>
  </div>
  )
}
