import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import TeacherCoursesFile from "../JSONFiles/TeacherCoursesFile.json";
import "../Components/Teacher.css";

const TeacherCoursesTable = ({ courses }) => {
  const { Courses } = TeacherCoursesFile;
  const tableStyle = {
    minWidth: 650,
  };

  return (
    <Box>
      <Paper elevation={0} style={{ marginBottom: "20px" }}>
        {" "}
        {/* Paper with elevation 0 */}
        <TableContainer>
          <Table style={tableStyle} aria-label="course details table">
            <TableHead className="CoursesTableHead">
              <TableRow>
                <TableCell className="CoursesTableCellHead">
                  Course Name
                </TableCell>
                <TableCell className="CoursesTableCellHead" align="center">
                  Schedule
                </TableCell>
                <TableCell className="CoursesTableCellHead" align="center">
                  Syllabus
                </TableCell>
                <TableCell className="CoursesTableCellHead" align="center">
                  Objectives
                </TableCell>
                <TableCell className="CoursesTableCellHead" align="center">
                  Required Materials
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="TableBodyHead">
              {Courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell component="th" scope="row">
                    {course.name}
                  </TableCell>
                  <TableCell className="courseTableValue" align="center">
                    {course.schedule}
                  </TableCell>
                  <TableCell className="courseTableValue" align="center">
                    {course.syllabus}
                  </TableCell>
                  <TableCell className="courseTableValue" align="center">
                    {course.objectives}
                  </TableCell>
                  <TableCell className="courseTableValue" align="center">
                    {course.requiredMaterials}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TeacherCoursesTable;
