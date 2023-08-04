import "./PriceButtons.css";
import { Button} from "@mui/material";
import { IoLogoEuro } from "react-icons/io";
import Grid from "@mui/material/Grid";


export default function ActionAreaCard() {
  return (
    <Grid
      sx={{ flexGrow: 1 }}
      container
      justifyContent="flex-start"
      alignItems={"center"}
      p={10}
      gap={5}
    >
      <Grid md={12} xs={12}>
        <Grid container justifyContent="flex-start">
          <Button className="priceMuiButton">
            Profesionalno šminkanje   <div className="priceEuros">25<IoLogoEuro size={40} /></div>
          </Button>
        </Grid>{" "}
      </Grid>
      <Grid md={12} xs={12}>
        <Grid container justifyContent="flex-start">
          <Button  className="priceSecondMuiButton">
            Profesionalno šminkanje s umjetnim trepavicama 
            <div className="priceEuros">30<IoLogoEuro size={40} /></div>
          </Button>
        </Grid>{" "}
      </Grid>
    </Grid>
  );
}
