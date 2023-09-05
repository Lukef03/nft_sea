import * as React from 'react';
import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductCard({ nft, cart, setCart }) {
    const addToCart = () => {
        setCart([...cart, nft]);
    }

    return (
        <Card sx={{ maxWidth: 500, maxHeight: 500, boxShadow: 15 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={nft.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {nft.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {nft.desc}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Price: {nft.price} ETH
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={addToCart}>Add to Cart</Button>
                <Button size="small" color="primary" component={Link} to={`/nft/${nft.id}`}>View Details</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;