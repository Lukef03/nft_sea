import React from "react";
import { Container, Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import astronaut from "../assets/images/astronaut.png";
import owl from "../assets/images/owl.png";
import monkey from "../assets/images/monkey.png";
import dog from "../assets/images/dog.png";

function Home({ cart, setCart }) {
    const nfts = [
        { id: 1, title: 'Relaxed Astronaut', price: 24.45, desc: 'An astronaut in an intergalactic plain', image: astronaut },
        { id: 2, title: 'Scholar Owl', price: 36.43, desc: 'A very intellectual owl', image: owl },
        { id: 3, title: 'Party Ape', price: 68.96, desc: 'A party-attending bored ape', image: monkey },
        { id: 4, title: 'Baloon Dog', price: 12.75, desc: 'A pink coloured baloon dog', image: dog }
    ]

    return (
        <>
            <NavBar></NavBar>
            <Container >
                <Grid container spacing={2} marginTop={"80px"} marginBottom={"20px"}>

                    {/* 1x4 Grid for List Items */}
                    {nfts.map((nft) => (
                        <Grid item xs={12} sm={12} md={6} lg={3} key={nft.id}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <ProductCard nft={nft} cart={cart} setCart={setCart} />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default Home;
