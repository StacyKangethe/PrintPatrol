import React from "react";
import { Box } from "@mui/system";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button } from "@mui/material";

function DropOffPoints() {
    return (
        <Box bgcolor="lightpink">
            <h2>AT YOUR SERVICE. AND THE PLANET</h2>
            <p>Put glass in seperate bins.The right labeled bin.
            We are committed to ensure the highest possible rate of glass recycling in Kenya
            </p>
            <Button color="secondary" variant="contained">How it works</Button>

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



export default DropOffPoints;