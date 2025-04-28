"use client";

import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import BoxGroup from "@/components/molecules/BoxGroup";
import HistoryTable from "@/components/organisms/HistoryTable";
import UserDetails from "@/layout/UserDetails/UserDetails";
import { useRouter } from "next/navigation";
import "@/styles/background.css";

const DashboardAdminPage = () => {
  const router = useRouter();

  return (
    <UserDetails>
      <Button
        className="col-start-10 col-end-12 row-start-4 mt-2"
        text="Manage Reservation"
        shadow="shadowButton"
        onClick={async () => {
          router.push("/table");
        }}
      />
      <Button
        className="col-start-10 col-end-12 row-start-5 mt-3"
        text="Generate Reports"
        variant="white"
        shadow="shadowButton"
        onClick={async () => {
          router.push("/request");
        }}
      />
            <HistoryTable
        title="Active Reservation"
        className="col-start-2 col-end-9 row-start-4 row-end-8 text-gray-500"
      >
        <div className="col-start-1 col-end-4 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center">
            N° Reservation
          </Typography>
        </div>
        <div className="col-start-4 col-end-6 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center">
            Date
          </Typography>
        </div>
        <div className="col-start-7 col-end-8 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center">
            Status
          </Typography>
        </div>
      </HistoryTable>

      {/* Estadísticas + Gráfico en un grid de 4 columnas */}
      <div className="col-start-2 col-end-12 row-start-9 row-end-13 grid grid-cols-4 gap-6">
        <BoxGroup
          text="118"
          subtext="New Reservation"
          className="w-full col-span-1"
          color="#0086C9"
        />
        <BoxGroup
          text="118"
          subtext="Total Reservation"
          className="w-full col-span-1"
          color="#024f72"
        />
        <BoxGroup
          text="118"
          subtext="Rejected Reservation"
          className="w-full col-span-1"
          color="#5f5f61"
        />
      </div>
      <HistoryTable
        title="Recent Reservation"
        className="col-start-2 col-end-12 row-start-13 row-end-17 text-gray-500"
      >
        <div className="col-start-1 col-end-3 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center">
            N° Reservation
          </Typography>
        </div>
        <div className="col-start-3 col-end-5 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center">
            Date
          </Typography>
        </div>
        <div className="col-start-5 col-end-7 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center">
            Status
          </Typography>
        </div>
        <div className="col-start-7 col-end-9 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center">
            Monitor
          </Typography>
        </div>
      </HistoryTable>
    </UserDetails>
  );
};

export default DashboardAdminPage;
