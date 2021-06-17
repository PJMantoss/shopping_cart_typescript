import { useState } from 'react';
import { useQuery } from 'react-query'; //useQuery hook
//Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShopingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
//Styles
import { Wrapper } from './App.styles';
//Types of properties we'll be fetching from the FakeStore API
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json()

const App = () => {
  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products', getProducts
    );

    console.log(data);

    const getTotalItems = () => null;

    const handleAddToCart = () => null;

    const removeFromCart = () => null;

    if(isLoading) return <LinearProgress />
    if(error) return <div className="errorDiv">Something went wrong...</div>

  return (
    <div className="App">
      Start
    </div>
  );
}

export default App;