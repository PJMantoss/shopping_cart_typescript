import Button from '@material-ui/core/Button';
//Types
import { CartItemType } from '../App';
//Styles
import { Wrapper } from './Item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>${item.price}</h4>
        </div>
        <Button onClick={}>Add To Cart</Button>
    </Wrapper>
)