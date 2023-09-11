import { EventSourceInput } from "@fullcalendar/core";


export const timeByType = {
  "1": 2,
  "2": 4,
  "3": 5,
};

export type FormData = {
    firstName: string;
    number: number | string;
    email: string;
    description: string;
    date: Date | null;
  };
  export type ReservationInfo ={
    title: string;
    description: string;
    date: string;
    time: string;
    type: "1"| "2"|"3";
    id: number;
  };

  

 