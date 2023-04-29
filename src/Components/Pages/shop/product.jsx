import React, { useContext } from "react";
import { ShopContext } from '../../context/shop-context';
import { CardContent, CardMedia, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export const Product = (props) => {
  const { id, productName, price, image, description } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} variant="outlined">
    
      <CardMedia component="img" sx={{
        height:"140"
      }}
        src={image} />
      <CardContent sx={{ flexGrow: 1 }} justify-content="center">
      <Typography gutterBottom variant="h6" component="div">
        {productName}
      </Typography>
      <Typography gutterBottom variant="h7" component="div">
        KSh{price}
      </Typography>
      <CardActions disableSpacing>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ flexGrow: 1 }} justify-content="center">
          <Typography gutterBottom variant="h7" component="div">
          {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};