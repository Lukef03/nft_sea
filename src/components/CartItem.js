import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography, ButtonBase, Button } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function CartItem({ id, image, title, owner, price, cart = [], setCart = () => { } }) { // Destructuring props and setting default values
    const removeFromCart = (id) => {
        setCart(cart.filter((nft) => nft.id !== id));
    };

    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                boxShadow: 15,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                marginTop: 5
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={image} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Owned by {owner}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary" onClick={() => removeFromCart(id)}>Remove</Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            ETH {price}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CartItem;
