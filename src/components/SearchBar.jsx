import { Search } from "@mui/icons-material";
import { Grid, IconButton, Paper } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    // <Grid
    // container justify = "center"
    // justifyContent="center">
      <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: "2px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search here..."
          value=""
          onChange={() => {}}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
          <Search />
        </IconButton>
      </Paper>
    // </Grid>
  );
};
export default SearchBar;
