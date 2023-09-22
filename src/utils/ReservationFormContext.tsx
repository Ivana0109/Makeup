import { createContext, useState } from "react";
import { Box, Modal } from "@mui/material";
import CalendarForm from "../Components/CalendarForm";

type ReservationFormContextType = {
  handleOpen: () => void;
};

export const ReservationFormContext = createContext<ReservationFormContextType>({
  handleOpen: () => {},
});

type ReservationFormProviderProps = {
  children: React.ReactNode;
  refresh?: () => void;
};

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 300, sm: 400, md: 400, lg: 500 },
   
    bgcolor: "background.paper",

    boxShadow: 24,
   
  };

export const ReservationFormProvider = ({ children, refresh }: ReservationFormProviderProps) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ReservationFormContext.Provider
      value={{
        handleOpen,
      }}
    >
      {children}
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <CalendarForm refresh={refresh} />
          </Box>
        </Modal>
    </ReservationFormContext.Provider>
  );
};
