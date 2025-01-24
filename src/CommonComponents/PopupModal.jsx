import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../Components/Teacher.css";

const AttendanceDetailsPopup = ({ studentAttendance, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose} className="PopupModalContainer">
      <DialogTitle>
        <Typography variant="h5" className="HeaderPopupModal">
          Attendance Details
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {studentAttendance ? (
          <div>
            <Typography
              variant="h6"
              gutterBottom
              className="studentName-header"
            >
              {studentAttendance.studentName}
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      className="subjectClassHeader"
                      style={{ textAlign: "left" }}
                    >
                      Subject
                    </TableCell>
                    <TableCell
                      className="PercentageClassHeader"
                      style={{ textAlign: "right" }}
                    >
                      Percentage
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentAttendance.subjects &&
                    studentAttendance.subjects.map((subject, index) => (
                      <TableRow key={index}>
                        <TableCell
                          className="subjectClass"
                          style={{
                            fontFamily: "cursive",
                            fontWeight: "400",
                            fontSize: "0.8rem",
                            textAlign: "left",
                          }}
                        >
                          {subject.subjectName}
                        </TableCell>
                        <TableCell
                          className="PercentageClass"
                          style={{
                            fontFamily: "calibri",
                            fontWeight: "400",
                            fontSize: "0.8rem",
                            textAlign: "right",
                          }}
                        >
                          {subject.percentage}%
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      className="subjectClassHeader"
                      style={{ textAlign: "left" }}
                    >
                      Lab
                    </TableCell>
                    <TableCell
                      className="PercentageClassHeader"
                      style={{ textAlign: "right" }}
                    >
                      Percentage
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentAttendance.labs &&
                    studentAttendance.labs.map((lab, index) => (
                      <TableRow key={index}>
                        <TableCell
                          className="subjectClass"
                          style={{
                            fontFamily: "cursive",
                            fontWeight: "400",
                            fontSize: "0.8rem",
                            textAlign: "left",
                          }}
                        >
                          {lab.labName}
                        </TableCell>
                        <TableCell
                          className="PercentageClass"
                          style={{
                            fontFamily: "calibri",
                            fontWeight: "400",
                            fontSize: "0.8rem",
                            textAlign: "right",
                          }}
                        >
                          {lab.percentage}%
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <Typography variant="body1" gutterBottom className="NoAttenClass">
            No attendance details found.
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AttendanceDetailsPopup;
