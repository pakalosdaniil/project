import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../contexts/productsContext";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(productContext);

  return (
    <Card sx={{ maxWidth: 300, margin: "10px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="450"
        width="200"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description.length > 20
            ? `${item.description.slice(0, 20)}...`
            : item.descricpiton}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          {" "}
          <DeleteIcon />{" "}
        </Button>
        <Button onClick={() => navigate(`/edit/${item.id}`)} size="small">
          <EditIcon />
        </Button>
        <Button size="small">
          <ShoppingCartRoundedIcon />
        </Button>
        <Button onClick={() => navigate(`/products/${item.id}`)} size="small">
          <MoreVertRoundedIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
