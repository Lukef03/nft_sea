import React from 'react';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';

function Cart({ cart, setCart }) {
    const removeFromCart = (id) => {
        setCart(cart.filter((nft) => nft.id !== id));
    };

    const checkout = () => {
        alert('Transaction Successful!');
        setCart([]);
    };

    return (
        <div>
            <Typography variant="h4">Cart</Typography>
            <List>
                {cart.map((nft) => (
                    <ListItem key={nft.id}>
                        <ListItemText primary={nft.name} secondary={`Price: ${nft.price} ETH`} />
                        <Button variant="contained" color="secondary" onClick={() => removeFromCart(nft.id)}>Remove</Button>
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" onClick={checkout}>Checkout</Button>
        </div>
    );
}

export default Cart;
