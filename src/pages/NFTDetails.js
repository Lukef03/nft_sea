import React from 'react';
import { Card, CardContent, Button, Typography, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar'; // Import your common header component

function NFTDetails({ nfts, cart, setCart }) {
    const navigate = useNavigate();
    var { id } = useParams();
    id = Number(id);
    const nft = nfts.find(item => item.id === id);

    const addToCart = () => {
        setCart([...cart, nft]);
    }

    const handleBuyNow = () => {
        addToCart(nft);
        navigate('/cart');
    };

    return (
        <>
            <NavBar /> {/* Your common header component */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <img src={nft.image} alt={nft.title} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{nft.title}</Typography>
                            <Typography variant="subtitle1">Owner: {nft.owner}</Typography>
                            <Typography variant="body2">{nft.description}</Typography>
                            <Typography variant="h6">Price: {nft.price} ETH</Typography>
                        </CardContent>
                    </Card>
                    <Button variant="contained" color="primary" onClick={addToCart}>
                        Add to Cart
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleBuyNow}>
                        Buy Now
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default NFTDetails;
