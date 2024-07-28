import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Animations() {
  return (
    <ThemeProvider theme={theme}>
      <div className="grid gap-6 py-10">
        <Box
          sx={{
            width: 150,
            [theme.breakpoints.up("lg")]: {
              width: 200, // Custom value for lg screens
            },
          }}
        >
          <Skeleton
            sx={{ height: 100, bgcolor: "white", borderRadius: 2, mb: 2 }}
            variant="rectangular"
          />
          <Skeleton sx={{ bgcolor: "white", borderRadius: 3 }} />
        </Box>
        <Box
          sx={{
            width: 300,
            [theme.breakpoints.up("lg")]: {
              width: 500, // Custom value for lg screens
            },
          }}
        >
          <Skeleton sx={{ bgcolor: "white", borderRadius: 3 }} />

          <Skeleton
            animation={false}
            sx={{ bgcolor: "white", mt: 1, borderRadius: 3 }}
          />
          <Skeleton
            sx={{ height: 190, bgcolor: "white", mt: 1, borderRadius: 2 }}
            variant="rectangular"
          />
        </Box>
      </div>
    </ThemeProvider>
  );
}
