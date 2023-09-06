import React from "react";
import { Container, Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

function Home({ nfts, cart, setCart }) {
    return (
        <>
            <NavBar></NavBar>
            <Container>
                <Grid container spacing={3} marginTop="60px" marginBottom={"20px"}  >
                    {nfts?.map((nft) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={nft.id}  >
                            <ProductCard nft={nft} cart={cart} setCart={setCart} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default Home;
