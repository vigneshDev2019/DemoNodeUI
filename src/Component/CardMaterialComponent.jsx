import {
  Avatar,
  Card,
  Chip,
  Divider,
  Button,
  IconButton,
  Switch,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

function CardMaterialComponent(props) {
  return (
    <div>
      <Card style={{ margin: "1rem", maxWidth: "13rem" }}>
        <Box sx={{ p: 2, display: "flex" }}>
          <Stack spacing={0.5}>
            <Typography fontWeight={700}>{props.Make}</Typography>
            <Typography variant="body2" color="text.secondary">
              {props.Model} on {props.Year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.Trim}
            </Typography>
          </Stack>
          <IconButton></IconButton>
        </Box>
        <Divider />
        <Stack
          direction="row"
          style={{ textAlign: "center" }}
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 2, bgcolor: "background.default" }}
        >
          <div style={{width : '100%', backgroundColor: props.Status ? "green" : "red", borderRadius: "5rem", color: "white", padding:"0.2rem"}}>{props.Status ? "Active" : "InActive"}</div>
        </Stack>
      </Card>
    </div>
  );
}

export default CardMaterialComponent;
