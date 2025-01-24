import React, { useEffect, useState } from "react";
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
import AttendanceDetailsPopup from "./PopupModal";
import PopupDataJSON from "../JSONFiles/AttendancePopup.json";
import "../Components/Teacher.css";

const AttendanceTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedStudentAttendance, setSelectedStudentAttendance] =
    useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleCLoseAttendancePopup = () => {
    setPopupOpen(false);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (studentName) => {
    console.log(`Clicked on ${studentName}`);
    const studentData = PopupDataJSON.attendanceDetails.find(
      (stu) => stu.studentName === studentName
    );
    if (studentData) {
      setSelectedStudentAttendance(studentData);
      setPopupOpen(true); // Open the popup when student data is found
    } else {
      setSelectedStudentAttendance(null);
      setPopupOpen(true);
    }
  };

  return (
    <div className="TeacherAttendanceTable">
      <TableContainer component={Paper}>
        <Table aria-label="attendance table">
          <TableHead
            className="TableAttendanceHeader"
            style={{ backgroundColor: "goldenrod" }}
          >
            <TableRow>
              <TableCell
                className="TableCellAttendanceHeader1"
                style={{
                  fontFamily: "cursive",
                  fontSize: "1.4rem",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                Student Name
              </TableCell>
              <TableCell
                className="TableCellAttendanceHeader2"
                style={{
                  fontFamily: "cursive",
                  fontSize: "1.4rem",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                University Roll
              </TableCell>
              <TableCell
                className="TableCellAttendanceHeader3"
                style={{
                  fontFamily: "cursive",
                  fontSize: "1.4rem",
                  textAlign: "right",
                  fontWeight: "bold",
                }}
              >
                Agg Attendance
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((student, index) => (
                <TableRow key={index}>
                  <TableCell style={{ textAlign: "left" }}>
                    {student.studentName}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {student.universityRoll}
                  </TableCell>
                  <TableCell
                    className={
                      student.aggregatePercentage < 60.0
                        ? "aggregatePercentageHover red"
                        : "aggregatePercentageHover green"
                    }
                    style={{ textAlign: "right" }}
                    onClick={() => handleRowClick(student.studentName)} // Pass the student name to handleRowClick
                  >
                    {student.aggregatePercentage} %
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      {popupOpen &&
        (selectedStudentAttendance ? (
          <AttendanceDetailsPopup
            studentAttendance={selectedStudentAttendance}
            onClose={handleCLoseAttendancePopup}
          />
        ) : (
          <AttendanceDetailsPopup
            studentAttendance={null}
            onClose={handleCLoseAttendancePopup}
          />
        ))}
    </div>
  );
};

export default AttendanceTable;
