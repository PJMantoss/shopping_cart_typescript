import CartItem from '../CartItem/CartItem';
//Types
import { CartItemType } from '../App';
//styles
import { Wrapper } from './Cart.styles';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {}
        </Wrapper>
    )
}

export default Cart;