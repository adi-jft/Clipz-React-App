import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
    const [selectedCategory, setSelectedCategory]=useState('New');
    const [videos, setVideos]=useState([]);

    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data)=>setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff", mt: 1 }}
        >
          © 2023 JFT. | All Rights Reserved.
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} 
          <span style={{ color: "#FC1503"}} > Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;
