import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../../model/IProduct";
import { AddShoppingCart, Height } from "@mui/icons-material";

import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router";

export default function Product({ product }: any) {
  return (
    <Card>
      <CardMedia sx={{ height: 160, backgroundSize: "contain" }} image={`http://localhost:5216/images/${product.imageUrl}`} />
      <CardContent>
        <Typography gutterBottom variant="h6" color="text.primary">{product.name}</Typography>
        <Typography variant="body2" color="secondary">{product.price} $</Typography>
        <Typography>{product.description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" startIcon={<AddShoppingCart />} color="success">Add To Card</Button >
        <Button component={Link} to={`/catalog/${product.id}`} size="small" startIcon={<SearchIcon />} color="primary">View</Button>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}