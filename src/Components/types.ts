import { EventSourceInput } from "@fullcalendar/core";


export type FormData = {
    firstName: string;
    number: number | string;
    email: string;
    description: string;
    date: Date | null;
  };
  export type ReservationInfo = EventSourceInput | undefined

 