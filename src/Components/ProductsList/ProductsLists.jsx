import { Filter } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productContext } from "../../contexts/productsContext";
import Filters from "../Filter/Filters";
import ProductCard from "../ProductCard/ProductCard";

const ProductsLists = () => {
  const navigate = useNavigate();
  const { getProducts, products } = useContext(productContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [price, setPrice] = useState([1, 10000]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Shop
        </Link>
        <Link underline="hover" color="inherit" href="/products">
          Products
        </Link>
        <Typography color="GrayText.primary">Add</Typography>
      </Breadcrumbs>

      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            style={{ margin: "30px" }}
            onClick={() => navigate("/add-product")}>
            +
          </Button>
          <Filters
            search={search}
            setSearch={setSearch}
            price={price}
            setPrice={setPrice}
          />
        </div>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          padding={"30px"}>
          {products.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default ProductsLists;
