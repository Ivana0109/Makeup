import { useContext } from "react";
import Button from "@mui/material/Button";
import "./MuiModal.css";
import useTranslation from "../utils/useTranslate";
import { ReservationFormContext } from "../utils/ReservationFormContext";

type Props={
  refresh?:()=>void
}
function MuiModal({ refresh }:Props) {
  const translate=useTranslation()
  const { handleOpen } = useContext(ReservationFormContext);

  return (
    <div className="modalConatiner">
      <Button className="modalMuiButton" onClick={handleOpen}>
      {translate("bookAnAppointment")}
      </Button>
    </div>
  );
}

export default MuiModal;
