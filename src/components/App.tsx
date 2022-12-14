import React from 'react'
import { useQuery } from 'react-query'
// Components
import Item from './Item/Item'
// import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
// import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
// import Badge from '@material-ui/core/Badge'
// Styles
import { Wrapper } from './App.styles'
// Types
export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

// ************* async func *****************
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json()

const App = () => {
  // const [state, setState] = useState('')
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  )

  // ************* Handlers *****************
  // const getTotalItems = () => null

  const handleAddToCart = (clickedItem: CartItemType) => ({ clickedItem })

  // const handleRemoveFromCart = () => null

  if (isLoading) {
    return <LinearProgress />
  }
  if (error) {
    return <div>Something went wrong ...</div>
  }

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item: CartItemType) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default App
