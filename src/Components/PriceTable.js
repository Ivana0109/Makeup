import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IoLogoEuro } from "react-icons/io";
import Grid from "@mui/material/Grid";

export default function ActionAreaCard() {
  return (
    <Grid sx={{ flexGrow: 1 }} container justifyContent="flex-start" alignItems={"center"} p={10} gap={5}  >
    <Grid item md={12} sx={12}>
      <Grid container justifyContent="flex-start"  >
      
        <Card sx={{ maxWidth: 470 , height: 140, }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Profesionalno šminkanje 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#43b1a8",
                  }}
                >
                  {" "}
                  <div style={{ fontSize: "40px" }}>25</div>{" "}
                  <IoLogoEuro size={40} />
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid> </Grid>
      <Grid item md={12} sx={12}>
      <Grid container justifyContent="flex-start" >
        <Card sx={{ maxWidth: 470, height: 140}}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Profesionalno šminkanje s umjetnim trepavicama
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#43b1a8",
                  }}
                >
                  {" "}
                  <div style={{ fontSize: "40px" }}>30</div>{" "}
                  <IoLogoEuro size={40} />
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid> </Grid>
    </Grid>
  );
}
