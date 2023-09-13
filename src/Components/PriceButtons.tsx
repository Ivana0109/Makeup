import "./PriceButtons.css";
import { Button } from "@mui/material";
import { IoLogoEuro } from "react-icons/io";
import Grid from "@mui/material/Grid";
import useTranslation from "../utils/useTranslate";

function PriceButtons() {
  const translate = useTranslation();
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
        <Grid md={6} xs={6} className="priceButtonsAling">
          <div className="underlineButton">
            {translate("proffesionalMakeup")}
          </div>
          <div className="priceEuros">
            25
            <IoLogoEuro />
          </div>
        </Grid>
        <Grid md={6} xs={6} className="priceButtonsAling">
          <div className="underlineButton">
            {translate("proffesionalMakeupWithLashExtensions")}
          </div>
          <div className="priceEuros">
            30 <IoLogoEuro />
          </div>
        </Grid>
      </Grid>{" "}
    </div>
  );
}
export default PriceButtons;
