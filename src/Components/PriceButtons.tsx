import "./PriceButtons.css";
import { Button } from "@mui/material";
import { IoLogoEuro } from "react-icons/io";
import Grid from "@mui/material/Grid";
import useTranslation from "../utils/useTranslate";

function PriceButtons() {
  const translate=useTranslation()
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
          {translate("proffesionalMakeup")}
            <div className="priceEuros">
              25
              <IoLogoEuro />
            </div>
          </Button>
        </Grid>
        <Grid md={12} xs={12}>
          <Button  className="priceSecondMuiButton" >
          {translate("proffesionalMakeupWithLashExtensions")}
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
