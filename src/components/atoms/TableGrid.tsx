"use client";

import React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRowSelectionModel,
  GridEventListener,
} from "@mui/x-data-grid";

interface CustomSx {
  box?: object;
  datagrid?: object;
}

interface TableGridProps {
  data: GridRowsProp;
  columns: GridColDef[];
  pageSize?: number;
  pageSizeOptions?: number[];
  height?: string;
  boxShadow?: string;
  borderRadius?: string;
  getRowHeight?: () => number;
  onRowClick?: GridEventListener<"rowClick">;
  rowSelection?: boolean;
  onRowSelectionModelChange?: (newSelection: GridRowSelectionModel) => void;
  sx?: CustomSx;
}

const TableGrid: React.FC<TableGridProps> = ({
  data,
  columns,
  pageSize = 5,
  pageSizeOptions = [5, 10, 20],
  height = "362px",
  boxShadow = "0px 0px 6px -3px rgba(0,0,0,0.75)",
  borderRadius = "15px",
  getRowHeight = () => 50,
  onRowClick = () => {},
  rowSelection = false,
  onRowSelectionModelChange = () => {},
  sx = {},
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height,
        borderRadius,
        boxShadow,
        ...(sx.box || {}),
      }}
    >
      <DataGrid
        className="bg-white"
        getRowHeight={getRowHeight}
        rows={data}
        columns={columns}
        pageSizeOptions={pageSizeOptions}
        initialState={{
          pagination: { paginationModel: { pageSize } },
        }}
        checkboxSelection={rowSelection}
        onRowSelectionModelChange={onRowSelectionModelChange}
        disableRowSelectionOnClick={!rowSelection}
        onRowClick={onRowClick}
        sx={{
          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            textAlign: "center",
          },
          // Agrega esta regla para centrar el contenedor del título:
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            justifyContent: "center",
          },
          "& .id--cell": {
            backgroundColor: "#0284c7",
            justifyContent: "center",
            color: "#ffffff",
          },
          "& .theme--cell": {
            backgroundColor: "#fff",
            justifyContent: "center",
          },
          "& .status--cell": {
            backgroundColor: "#fff",
            justifyContent: "center",
            fontWeight: 600,
          },
          borderRadius,
          ...(sx.datagrid || {}),
        }}
      />
    </Box>
  );
};

export default TableGrid;
