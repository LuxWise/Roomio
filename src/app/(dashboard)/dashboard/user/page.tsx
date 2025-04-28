"use client";

import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import BoxGroup from "@/components/molecules/BoxGroup";
import HistoryTable from "@/components/organisms/HistoryTable";
import UserDetails from "@/layout/UserDetails/UserDetails";
import { useRouter } from "next/navigation";
import "@/styles/background.css";

const DashboardUserPage = () => {
  const router = useRouter();

  return (
    <UserDetails>
      {/* Habitaciones */}
      <div className="col-start-2 col-end-12 row-start-9 row-end-13 grid grid-cols-4 gap-6">
  <BoxGroup
    text="ROOM 1"
    subtext="Description"
    className="w-full col-span-1"
    color="#024f72"
  />
  <BoxGroup
    text="ROOM 2"
    subtext="Description"
    className="w-full col-span-1"
    color="#0086C9"
  />
  <BoxGroup
    text="ROOM 3"
    subtext="Description"
    className="w-full col-span-1"
    color="#00B383"
  />
  <BoxGroup
    text="ROOM 4"
    subtext="Description"
    className="w-full col-span-1"
    color="#FFAA00"
  />
  <BoxGroup
    text="ROOM 5"
    subtext="Description"
    className="w-full col-span-1"
    color="#5f5f61"
  />
  <BoxGroup
    text="ROOM 6"
    subtext="Description"
    className="w-full col-span-1"
    color="#D7263D"
  />
</div>

      {/* Botones Report / Cancel */}
      <Button
        className="col-start-10 col-end-12 row-start-4 mt-2"
        text="Solicitudes"
        shadow="shadowButton"
        onClick={async () => {
          router.push("/table");
        }}
      />
      <Button
        className="col-start-10 col-end-12 row-start-5 mt-3"
        text="Crear Solicitud"
        variant="white"
        shadow="shadowButton"
        onClick={async () => {
          router.push("/request");
        }}
      />

      {/* Tabla de última reserva */}
      <section className="col-start-2 col-end-12 row-start-7 row-end-12">
        <HistoryTable title="Last Reservation" className="text-gray-500">
          <div className="col-start-1 col-end-4 row-start-1">
            <Typography variant="h4" className="flex justify-center">
              N° Reservation
            </Typography>
          </div>
          <div className="col-start-4 col-end-7 row-start-1">
            <Typography variant="h4" className="flex justify-center">
              Date
            </Typography>
          </div>
          <div className="col-start-7 col-end-9 row-start-1">
            <Typography variant="h4" className="flex justify-center">
              Status
            </Typography>
          </div>
          <div className="col-start-9 col-end-11 row-start-1">
            <Typography variant="h4" className="flex justify-center">
              Monitor
            </Typography>
          </div>
        </HistoryTable>
      </section>
    </UserDetails>
  );
};

export default DashboardUserPage;
