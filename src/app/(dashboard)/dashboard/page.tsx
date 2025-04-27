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
      <HistoryTable
        title="Lasted Request"
        className="col-start-2 col-end-9 row-start-4 row-end-8 text-gray-500"
      >
        <div className="col-start-1 col-end-4 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center">
            N° Request
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
      <section className="flex gap-x-10 col-start-2 col-end-9 row-start-9 row-end-12 ">
        <BoxGroup text="12" subtext="New send" className="w-1/3" />
        <BoxGroup
          text="122"
          subtext="Total Request"
          className="w-1/3"
          color="#024f72"
        />
        <BoxGroup
          text="25"
          subtext="Rejected Request"
          className="w-1/3"
          color="#5f5f61"
        />
      </section>
      <HistoryTable
        title="Request in the last 7 days"
        className="col-start-2 col-end-12 row-start-13 row-end-17 text-gray-500"
      >
        <div className="col-start-1 col-end-3 row-start-1 row-end-2">
          <Typography variant="h4" className="flex justify-center">
            N° Request
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

export default DashboardPage;
