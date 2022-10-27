import Button from '@material-ui/core/Button'
// types
import { CartItemType } from '../App'
// styles
import { Wrapper } from './Item.styles'
import React from 'react'

type Props = {
  item: CartItemType
  handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h4>{item.price}</h4>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  )
}

export default Item
