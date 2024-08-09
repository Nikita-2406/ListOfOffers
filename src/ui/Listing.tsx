import { FC } from "react"
import { ViewCard } from "./ViewCard"
import { IItems } from "../models"

interface ListingProps {
  items: Array<IItems>
}

export const Listing:FC<ListingProps> = (props) => {
  const items = props.items
  // const info: IItems = { listing_id: items.listing_id, 
  //   url: items.url,
  //   MainImage: items.MainImage,
  //   title: items.title,
  //   currency_code: items.currency_code,
  //   price: items.price,
  //   quantity: items.quantity, }
    const view = items.map(item => {
      const info: IItems = { listing_id: item.listing_id, 
        url: item.url,
        MainImage: item.MainImage,
        title: item.title,
        currency_code: item.currency_code,
        price: item.price,
        quantity: item.quantity, }
      return <ViewCard item={info}/>
    })
  return (
    <div className="item-list">{view}</div>
    )
}
