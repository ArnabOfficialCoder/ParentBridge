import React, { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import studentPaymentData from "../JSONFiles/ParentPaymentFile.json";
import "../Components/Teacher.css";

const Row = ({ row }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow className="table-row">
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.student_name}
        </TableCell>
        <TableCell align="center">{row.semester}</TableCell>
        <TableCell align="center">{row.university_roll_no}</TableCell>
        <TableCell align="center">{row.amount_paid}</TableCell>
        <TableCell align="center">{row.payment_date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="empty-cell" colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className="collapse-box">
              <Typography variant="h6" gutterBottom component="div">
                Payment Details
              </Typography>
              <Table
                size="small"
                aria-label="purchases"
                className="payment-table"
              >
                <TableHead className="payment-table-header">
                  <TableRow>
                    <TableCell className="payment-table-header-cell">
                      Date
                    </TableCell>
                    <TableCell
                      className="payment-table-header-cell"
                      align="center"
                    >
                      Amount Paid (INR)
                    </TableCell>
                    <TableCell
                      className="payment-table-header-cell"
                      align="right"
                    >
                      Semester
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow
                      key={historyRow.date}
                      className="payment-table-row"
                    >
                      <TableCell
                        className="payment-table-cell payment-table-cell--date"
                        component="th"
                        scope="row"
                      >
                        {historyRow.date}
                      </TableCell>
                      <TableCell
                        className="payment-table-cell payment-table-cell--amount"
                        align="center"
                      >
                        {historyRow.amount}
                      </TableCell>
                      <TableCell
                        className="payment-table-cell payment-table-cell--semester"
                        align="right"
                      >
                        {historyRow.semester}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const ParentPaymentTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  return (
    <div>
      <div className="PaymentDetailsHeader">Payment Details</div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table" className="main-table">
          <TableHead>
            <TableRow className="tableRowHead">
              <TableCell />
              <TableCell className="tableCellHead">Student Name</TableCell>
              <TableCell className="tableCellHead" align="right">
                Semester
              </TableCell>
              <TableCell className="tableCellHead" align="right">
                University ID
              </TableCell>
              <TableCell className="tableCellHead" align="right">
                Total Amount Paid
              </TableCell>
              <TableCell className="tableCellHead" align="right">
                Last Payment Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentPaymentData.payments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <Row key={index} row={row} />
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
          component="div"
          count={studentPaymentData.payments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className="pagination"
        />
      </TableContainer>
    </div>
  );
};

export default ParentPaymentTable;
