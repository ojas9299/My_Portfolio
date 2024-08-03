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
            width: { xs: 180, sm: 250, lg: 300 }, // Adjusted for different screen sizes
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
            width: { xs: 250, sm: 400, lg: 550 }, // Adjusted for different screen sizes
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
