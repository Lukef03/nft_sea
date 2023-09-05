import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import CartItem from '../components/CartItem';
import Summary from '../components/Summary';

function Cart({ cart, setCart }) {
    const [total, setTotal] = useState(0); // initialize total to 0

    // Update the total whenever the cart changes
    useEffect(() => {
        var total = 0;
        cart.forEach(nft => {
            total += nft.price;
        });
        setTotal(total.toFixed(2));
    }, [cart]); // dependency array, this ensures useEffect runs whenever cart changes

    return (
        <>
            <NavBar></NavBar>
            <Container fixed>
                <Grid container spacing={3} marginTop={5} marginBottom={2}>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <Grid container>
                            <Grid item xs>
                                {cart.map((nft) => (
                                    <CartItem id={nft.id} image={nft.image} title={nft.title} price={nft.price} owner={nft.owner} cart={cart} setCart={setCart} />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <Summary total={total} setCart={setCart} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Cart;
