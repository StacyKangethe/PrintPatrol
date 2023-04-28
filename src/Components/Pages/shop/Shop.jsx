import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Product } from './product';
 
//App.js


/**
 * Retrieve the current cart or create one if one does not exist
 * https://commercejs.com/docs/sdk/cart
 */


const shopPost = [ 
  {
   id: 1,
   image: "cannabeast.jpg",
   imageLabel: 'sticker',
   productName: 'Cannabeast',
   description: 'It goes without saying that most cannabis users tend to be creative individuals or are people who find their way around things.. So this design is inspired by a master of adaptation (change) found in nature; the chameleon', 
   price: 2700,
  },
  {
   id: 2,
   image: 'Dj_print.jpg',
   imageLabel: 'sticker',
   productName: 'Sensimilia',
   description: 'Halftone print featuring tomatoes (nyanya) in a crate with a 4/20 price tag. It is a nod to the marijuana culture that exists within Nairobi.A clever play on words that combines a Swahili/slang term with a market reference to create a unique design.', 
   price: 2500,
  },
  {
   id: 3,
   image: 'nyanyadesign.jpg',
   imageLabel: 'sticker',
   productName: 'Nyanya 4/20',
   description: ' Print - 2 color Puff Art Print. Got inspired by listening to Sensimilia tracks and individuals pushing themselves to provide quality Sensi for the healing of the nation . Sensimilia is a highly concentrated form of female cannabis flower that has never been exposed to male plants & therefore be any strain.' ,
   price: 2500,
  },
  {
   id: 4,
   image: 'hempire.png',
   imageLabel: 'sticker',
   productName: 'Hempire',
   description: 'Print - Halftone Peter tosh print,Puff Herb Stroke. For this Merch design ,I got inspired by Peter tosh lyrics on Legalize it track for personal, spiritual,medicinal use and decriminalization of Herb worldwide ,ending illigal humiliation to individuals.', 
   price: 2500,
  },
  {
   id: 5,
   image: 'stonedagain.jpg',
   imageLabel: 'sticker',
   productName: 'Stoned Again',
   description: 'The design of Hempire combines two powerful elements: Hemp and the Empire State Building. By blending them together in both name and image, we hope to showcase the incredible potential of hemp. We want to elevate hemp to the same level of admiration and respect as iconic structures like the Empire State Building.Let us embrace the Hempire and unleash its full potential! Bud business is indeed, good business.', 
   price: 2500,
  },
  {
   id: 6,
   image: 'burninginsense.jpg',
   imageLabel: 'sticker',
   productName: 'Burning in Sense',
   description: 'The design is inspired by the criminalization of the herb(marijuaña), It paints a picture for the herb activists that the plant is a sacrament and sweet incense given to us by nature for the service of man.', 
   price: 2500,
  },
 ];

const theme = createTheme();

export default function Shop() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
             420 Ganja Farm
            </Typography>
            <Typography variant="h7" align="center" color="text.inherit" paragraph>
            As herb enthusiasts, we're always looking for ways to herbvocate and promote the use of this amazing plant. We are against seeing people being imprisoned and stigmatized just for using or associating with this herb. We know that persistence and joint efforts can make a difference.<br></br>
            ‌So let's celebrate 4/20 with a joint effort to push for the decriminalization and legalization of this amazing plant.<br></br> 
            When we all come together, great things can happen.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {shopPost.map((post) => (
              <Grid item xs={12} sm={6} md={4}>
                <Product data={post} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
