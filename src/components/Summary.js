import React from "react";
import { Card, CardActions, CardContent, Typography, Grid } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function Summary({ total, setCart }) { // Destructure the props correctly here
    const checkout = () => {
        alert('Transaction Successful!');
        setCart([]);
    };

    const [loading, setLoading] = React.useState(false);

    function handleClick() {
        setLoading(true);
        setTimeout(() => {
            checkout();
            setLoading(false);
        }, 3000);
    }

    return (
        <Card
            sx={{
                position: "sticky",
                top: "5rem",
                minWidth: 275,
                boxShadow: 15,
                marginTop: 5,
                marginBottom: 2
            }}
        >
            <CardContent>
                <Typography variant="h6" component="h1">
                    Order Summary
                </Typography>
                <Typography variant="subtitle2">
                    <hr />
                </Typography>
                <Grid container>
                    <Grid item xs={9} sm={9} md={8} lg={9}>
                        <Typography variant="h6" component="div">
                            Total Pricing
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={4} lg={3}>
                        <Typography variant="h6" component="div">
                            ETH {total}
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={6} lg={8}>
                        <Typography variant="h6" component="div">
                            Price in AUD
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={4} lg={3} textAlign={"right"}>
                        <Typography variant="h6" component="div">
                            {(total * 2500).toLocaleString('en-AU', {
                                style: 'currency',
                                currency: 'AUD',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions>
                <LoadingButton
                    onClick={handleClick}
                    endIcon={<CreditCardIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    <span>Checkout</span>
                </LoadingButton>
            </CardActions>
        </Card>
    );
}

export default Summary;
