"use client";

import React from "react";
import TableGrid from "@/components/atoms/TableGrid";
import Typography from "@/components/atoms/Typography";
import HistoryTable from "@/components/organisms/HistoryTable";
import UserDetails from "@/layout/UserDetails/UserDetails";
import { GridRowsProp, GridColDef, GridEventListener } from "@mui/x-data-grid";
import "@/styles/background.css";

const testRows: GridRowsProp = [
  {
    id: 73120,
    tenant: "Felipe Correa",
    type: "Inconveniente",
    status: "Pendiente",
  },
  {
    id: 73121,
    tenant: "Leonardo Bueno",
    type: "Solucitude",
    status: "Pendiente",
  },
  {
    id: 73122,
    tenant: "Andres Sanabria",
    type: "Garantia",
    status: "Pendiente",
  },
  {
    id: 73123,
    tenant: "Hugo Chacon",
    type: "Mantenimiento",
    status: "Pendiente",
  },
];

const testColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    cellClassName: "id--cell",
  },
  {
    field: "tenant",
    headerName: "Tenent",
    flex: 1,
    cellClassName: "theme--cell",
  },
  {
    field: "type",
    headerName: "Request Type",
    flex: 1,
    cellClassName: "theme--cell",
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    cellClassName: "status--cell",
  },
];

const TestTable: React.FC = () => {
  const handleRowClick: GridEventListener<"rowClick"> = params => {
    console.log("Fila seleccionada:", params.row);
  };

  return (
    <UserDetails>
      <Typography
        variant="max"
        className="col-start-2 col-end-10 row-start-4 row-end-5"
      >
        Table Requests
      </Typography>
      <section className="col-start-2 col-end-9 row-start-5 row-end-13">
        <TableGrid
          data={testRows}
          columns={testColumns}
          pageSize={5}
          height="95%"
          onRowClick={handleRowClick}
        />
      </section>
      <HistoryTable
        title="Request in the last 7 days"
        className="col-start-2 col-end-12 row-start-13 row-end-17 "
      />
    </UserDetails>
  );
};

export default TestTable;
