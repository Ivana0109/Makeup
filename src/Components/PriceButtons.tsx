import "./PriceButtons.css";
import { Button } from "@mui/material";
import { IoLogoEuro } from "react-icons/io";
import Grid from "@mui/material/Grid";

function PriceButtons() {
  return (
    <div className="priceContainer">
      <Grid
        sx={{ flexGrow: 1 }}
        container
        justifyContent="flex-start"
        alignItems={"center"}
        p={10}
        gap={5}
      >
        <Grid md={12} xs={12}>
          <Button className="priceMuiButton">
            Profesionalno šminkanje{" "}
            <div className="priceEuros">
              25
              <IoLogoEuro />
            </div>
          </Button>
        </Grid>
        <Grid md={12} xs={12}>
          <Button className="priceSecondMuiButton">
            Profesionalno šminkanje s umjetnim trepavicama
            <div className="priceEuros">
              30 <IoLogoEuro />
            </div>
          </Button>
        </Grid>
      </Grid>{" "}
    </div>
  );
}
export default PriceButtons;
