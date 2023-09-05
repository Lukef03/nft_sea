import React from "react";
import { Container, Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import astronaut from "../assets/images/astronaut.png";
import owl from "../assets/images/owl.png";
import dog from "../assets/images/dog.png";
import monkey from "../assets/images/monkey.png";
import dreamscape from "../assets/images/dreamscape.jpeg";
import cyber from "../assets/images/cyber.png";
import evolution from "../assets/images/evolution.png";
import galaxy from "../assets/images/galaxy.png";
import nanobot from "../assets/images/nanobot.png";
import nirvana from "../assets/images/nirvana.png";
import technoart from "../assets/images/technoart.png";
import virtual from "../assets/images/virtual.png";

function Home({ cart, setCart }) {
    const nfts = [
        { id: 1, title: 'Relaxed Astronaut', price: 24.45, desc: 'An astronaut in an intergalactic plain', image: astronaut },
        { id: 2, title: 'Scholar Owl', price: 36.43, desc: 'A very intellectual owl', image: owl },
        { id: 3, title: 'Party Ape', price: 68.96, desc: 'A party-attending bored ape', image: monkey },
        { id: 4, title: 'Baloon Dog', price: 12.75, desc: 'A pink coloured baloon dog', image: dog },
        { id: 5, title: 'Cybervortex Explorer', price: 29.43, desc: 'An exploration mission into ther cyber-vortex space', image: cyber },
        { id: 6, title: 'Nanobot Symphony', price: 12.75, desc: 'A host of nanobots working together', image: nanobot },
        { id: 7, title: 'Blockchain Dreamscape', price: 23.74, desc: 'A dreamy landscape set in a blockchain', image: dreamscape },
        { id: 8, title: 'Neural Nirvana', price: 27.34, desc: 'A multi-coloured abstract of nirvana', image: nirvana },
        { id: 9, title: 'Cryptopixel Galaxy', price: 8.97, desc: 'A fusion of pixels in a digital galaxy', image: galaxy },
        { id: 10, title: 'VR Odyssey', price: 68.37, desc: 'A deep dive in virtual reality', image: virtual },
        { id: 11, title: 'Technoart Fusion', price: 39.57, desc: 'A complicated mix of technology with colours', image: technoart },
        { id: 12, title: 'Evolution Elegance', price: 12.75, desc: 'A elegant evolution which is dark in nature', image: evolution }
    ]

    return (
        <>
            <NavBar></NavBar>
            <Container>
                <Grid container spacing={3} marginTop="60px" marginBottom={"20px"} >
                    {nfts.map((nft) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={nft.id} >
                            <ProductCard nft={nft} cart={cart} setCart={setCart} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default Home;
