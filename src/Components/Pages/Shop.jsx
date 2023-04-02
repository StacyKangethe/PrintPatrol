import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const shopPost = [ 
 {
  image: 'https://images.unsplash.com/photo-1626747086388-b83fc4e1aca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXNoJTIwY2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  imageLabel: 'sticker',
  productName: 'Metal Bins',
  description: 'Colored bins used in commercial buildings', 
  price: 'Ksh. 3,000',
 },
 {
  image: 'https://images.unsplash.com/photo-1610106836884-ec496933aff7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  imageLabel: 'sticker',
  productName: 'Striped Metal Bins',
  description: 'Guided bins with instructions of waste disposal', 
  price: 'Ksh. 1,200',
 },
 {
  image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYXNoJTIwY2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  imageLabel: 'sticker',
  productName: 'Sticker Bins',
  description: 'Plastic Bins with colorful stickers indicating type of waste.', 
  price: 'Ksh. 800',
 },
 {
  image: 'https://images.unsplash.com/photo-1616924416730-5566217be0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHJlY3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
  imageLabel: 'sticker',
  productName: 'B&W Labels',
  description: 'Well designed Labels in well selected typography.', 
  price: 'Ksh. 500',
 },
 {
  image: 'https://images.unsplash.com/photo-1572010696997-c73e95aeebe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2luZyUyMGJveGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  imageLabel: 'sticker',
  productName: 'Labelled Boxes',
  description: 'Used to dispose off glass and storing glass bottles during transportation.', 
  price: 'Ksh. 80',
 },
 {
  image: 'https://images.unsplash.com/photo-1675395594169-c6b14260e271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlY3ljbGUlMjBzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  imageLabel: 'sticker',
  productName: 'Wood Signage',
  description: 'Used in public spaces to guide the audience on what is expected within that environment.', 
  price: 'Ksh. 350',
 },
];
 
//App.js
const [cart, setCart] = useState({});

/**
 * Retrieve the current cart or create one if one does not exist
 * https://commercejs.com/docs/sdk/cart
 */
const fetchCart = () => {
  commerce.cart.retrieve().then((cart) => {
    setCart(cart);
  }).catch((error) => {
    console.log('There was an error fetching the cart', error);
  });
}
// App.js

useEffect(() => {
  fetchProducts();
  fetchCart();
}, []);


  

const theme = createTheme();

export default function Shop(props) {
  const { post } = props;
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
              Glass Disposal Accessories
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Meet our certified sellers of our 3 superpowers. Labels, Bins and Packaging Containers right to your doorstep.<br></br>Let us Dispose-off right.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {shopPost.map((post) => (
              <Grid item key={post} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      height: 220,
                    }}
                    image={post.image}
                    alt={post.imageLabel}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {post.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button variant="contained">VIEW</Button>
                  <Button variant="outlined" onClick={handleAddToCart}>ADD TO CART</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}