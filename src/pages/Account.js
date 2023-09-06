// import React from 'react';
// import { Card, CardContent, Button, Typography, Grid } from '@mui/material';
// import { useNavigate, useParams } from 'react-router-dom';
// import NavBar from '../components/NavBar';

// function Account({ account }) {
//     if (!account) {
//         return <p>Please login first.</p>;
//     }

//     return (
//         <>
//         <NavBar/>
//         <Container><div>
//             <h1>Account</h1>
//             <p>Username: {account.username}</p>
//         </div></Container>
        
//         </>
        
//     );
// }

// export default Account;


import React from "react";
import NavBar from "../components/NavBar";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

function MyAccountPage() {
  // TODO: change the naming of this
  const ListOfThings = [
    {
      image: "https://picsum.photos/100/100",
      text: "lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet",
    },
    {
      image: "https://picsum.photos/100/100",
      text: "lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet",
    },
    {
      image: "https://picsum.photos/100/100",
      text: "lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet",
    },
    {
      image: "https://picsum.photos/100/100",
      text: "lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet",
    },
    {
      image: "https://picsum.photos/100/100",
      text: "lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet",
    },
    {
      image: "https://picsum.photos/100/100",
      text: "lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet",
    },
    {
      image: "https://picsum.photos/100/100",
      text: "lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet",
    },
    {
      image: "https://picsum.photos/100/100",
      text: "lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet",
    },
  ];

  return (
    <>
      <NavBar/>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <Paper elevation={1} sx={{ width: "100%" }}>
            <Box sx={{ m: 3, display: "flex", gap: 5 }}>
              <Box
                component="img"
                alt="Profile picture"
                src="https://picsum.photos/150/150"
              ></Box>
              <Box>
                <Typography variant="h4" sx={{ mb: 0.5 }}>
                  Jack Jackson
                </Typography>
                <Typography>Wallet Balance: 1.2 ETH</Typography>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* TODO: Make this as a seperate component */}
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, minHeight: "100%" }}>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", fontWeight: "bold", mb: 5 }}
              >
                Transaction History
              </Typography>
              <div style={{ height: "40vh", overflow: "auto" }}>
                {ListOfThings.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={`Transaction ${index}`}
                      style={{ marginRight: "10px" }}
                    />
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, minHeight: "100%" }}>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", fontWeight: "bold", mb: 5 }}
              >
                Products
              </Typography>
              <div style={{ height: "40vh", overflow: "auto" }}>
                {ListOfThings.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={`Product ${index}`}
                      style={{ marginRight: "10px" }}
                    />
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default MyAccountPage;

