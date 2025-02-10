import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import ResponsiveAppBar from "../components/navbar/navbar"; // Ensure this path is correct

const AppLayout = () => {
  return (
    <>
      {/* Navbar */}
      <ResponsiveAppBar />

      {/* Main Content */}
      <Box sx={{ mt: 10, py: 4 }}> {/* Adds spacing so content isn't hidden by the fixed navbar */}
        <Container maxWidth="lg">
          <Outlet />  {/* This will dynamically render different pages */}
        </Container>
      </Box>
    </>
  );
};

export default AppLayout;
