"use client";

import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import BoxGroup from "@/components/molecules/BoxGroup";
import HistoryTable from "@/components/organisms/HistoryTable";
import UserDetails from "@/layout/UserDetails/UserDetails";
import { useRouter } from "next/navigation";
import "@/styles/background.css";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <UserDetails>
      {/* Botones superiores */}
      <div className="flex flex-col gap-4 col-start-10 col-end-12 row-start-4">
        <Button
          text="Report an issue"
          shadow="shadowButton"
          onClick={async () => {
            router.push("/report");
          }}
        />
        <Button
          text="Cancel Reservation"
          variant="white"
          shadow="shadowButton"
          onClick={async () => {
            router.push("/cancel");
          }}
        />
      </div>

      {/* Grilla de habitaciones */}
      <section className="grid grid-cols-3 gap-8 col-start-2 col-end-9 row-start-4 row-end-10">
        <BoxGroup text="ROOM 1" subtext="Description" className="w-full" />
        <BoxGroup text="ROOM 2" subtext="Description" className="w-full" />
        <BoxGroup text="ROOM 3" subtext="Description" className="w-full" color="#5f5f61" />
        <BoxGroup text="ROOM 4" subtext="Description" className="w-full" />
        <BoxGroup text="ROOM 5" subtext="Description" className="w-full" />
        <BoxGroup text="ROOM 6" subtext="Description" className="w-full" color="#5f5f61" />
      </section>

      {/* Tabla de última reservación */}
      <HistoryTable
        title="Last Reservation"
        className="col-start-2 col-end-12 row-start-11 row-end-15 text-gray-500"
      >
        <div className="col-start-1 col-end-3 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center font-bold">
            N° Reservation
          </Typography>
        </div>
        <div className="col-start-3 col-end-5 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center font-bold">
            Date
          </Typography>
        </div>
        <div className="col-start-5 col-end-7 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center font-bold">
            Status
          </Typography>
        </div>
        <div className="col-start-7 col-end-9 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center font-bold">
            Monitor
          </Typography>
        </div>
      </HistoryTable>
    </UserDetails>
  );
};

export default DashboardPage;

