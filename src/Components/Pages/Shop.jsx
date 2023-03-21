import React from "react";
import { Box } from "@mui/system";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button } from "@mui/material";

function Shop() {
    return (
        <Box bgcolor="lightyellow">
            <h2>BENEFITS OF GLASS</h2>
            <p>100% Recyclable
            Learn the economics of the glass ecosystem.
            </p>
            <Button color="inherit" variant="contained">Learn More</Button>
            <ImageList sx={{ width: 500, height: 450 }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>by: {item.author}</span>}
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
     
        title: 'RecyclingCompany1',
        author: '@Nairobi'
    },
  
   
];



export default Shop;