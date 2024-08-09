import './App.css'
import { Listing } from './ui/Listing'
import itemsJSON from './data/estsy.json'
import { IItems } from './models'

function App() {
  const items = itemsJSON
  let rady: Array<IItems> = []
  for (const item of items) {
    rady.push({
      listing_id: item.listing_id,
      url: item.url,
      MainImage: item.MainImage?.url_570xN,
      title: item.title === undefined ? '' : item.title,
      currency_code: item.currency_code,
      price: item.price,
      quantity: item.quantity === undefined ? 0 : item.quantity,
    })    
  }
  return (
    <>
      < Listing items={rady}/>
    </>
  )
}

export default App
