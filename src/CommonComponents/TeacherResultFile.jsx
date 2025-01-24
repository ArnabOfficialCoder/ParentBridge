import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import "../Components/Teacher.css";

const TeacherResultFile = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10)); // Change radix to 10
    setPage(0); // Reset page to 0 when changing rows per page
  };

  return (
    <div className="table-container">
      <h2 className="resultHEader">Results</h2>
      <TableContainer component={Paper}>
        <Table className="TeacherTable" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table-header" align="center">
                Student Name
              </TableCell>
              <TableCell className="table-header" align="center">
                University Roll No
              </TableCell>
              <TableCell className="table-header" align="center">
                Sub1
              </TableCell>
              <TableCell className="table-header" align="center">
                Sub2
              </TableCell>
              <TableCell className="table-header" align="center">
                Sub3
              </TableCell>
              <TableCell className="table-header" align="center">
                Sub4
              </TableCell>
              <TableCell className="table-header" align="center">
                Sub5
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((student, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{student.name}</TableCell>
                  <TableCell align="center">{student.rollNo}</TableCell>
                  <TableCell align="center">{student.sub1}</TableCell>
                  <TableCell align="center">{student.sub2}</TableCell>
                  <TableCell align="center">{student.sub3}</TableCell>
                  <TableCell align="center">{student.sub4}</TableCell>
                  <TableCell align="center">{student.sub5}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={data.length}
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

export default TeacherResultFile;
