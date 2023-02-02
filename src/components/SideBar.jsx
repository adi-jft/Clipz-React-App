import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((e) => (
        <button
          className="category-btn"
          onClick={()=>{
            setSelectedCategory(e.name)
          }}
          style={{
            background: e.name === selectedCategory && "#FC1503",
            color: "white"
          }}
          key={e.name}
        >
          <span style={{color: e.name===selectedCategory ? 'white' : 'red', paddingRight: '10px'}}>{e.icon}</span>
          <span style={{opacity: e.name===selectedCategory ? '1' : '0.6'}}>{e.name}</span>
        </button>
      ))}
    </Stack>
  );
};
export default SideBar;
