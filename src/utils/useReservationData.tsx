import React, { useCallback, useEffect, useState } from "react";
import { ReservationInfo, timeByType } from "../Components/types";
import dayjs from "dayjs";
import axios from "axios";

function 
useReservationData(selectedDate?: Date) {


  const [reservations, setReservations] = useState<ReservationInfo[]>([]);

  const refresh = useCallback(() => {
    if (selectedDate) {
      const dateValue = selectedDate
        ? dayjs(selectedDate).format("YYYY-MM-DD")
        : "";
      axios
        .get(`http://localhost:8000/data?date_like=${dateValue}`)
        .then((res) => setReservations(res.data));
    }
  }, [selectedDate]);

  useEffect(() => {
    refresh();
  }, [refresh]);


  const reservationTimes = reservations.flatMap((item) =>{

    const [hour,minutes]=item.time.split(":")
    let time=dayjs().utc().set("hour",parseInt(hour)).set("minute",parseInt(minutes))
    const result=[]
 
    for(let i=0; i<timeByType[item.type]; i++){
      result.push(time.format("HH:mm"))
      time=time.add(30,"minute")
     
    }
    console.log(result)
   return result

  
  });


  return { reservations, refresh, reservationTimes }; 
}

export default useReservationData;
