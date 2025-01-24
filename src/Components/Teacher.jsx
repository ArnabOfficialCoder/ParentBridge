import React, { useState, useEffect } from "react";
import TeacherPaymentTable from "../CommonComponents/TeacherPaymentTable";
import TeacherCoursesTable from "../CommonComponents/TeacherCoursesTable";
import SnackBar from "../CommonComponents/SnackBar";
import SingleSelect from "../CommonComponents/ReactSingleSelect";
import { useHistory } from "react-router-dom";
import TeacherResultFile from "../CommonComponents/TeacherResultFile";
import TeacherResultFileData from "../JSONFiles/TeacherResultFile.json";
import "./Teacher.css";
import TeacherPaymentData from "../JSONFiles/TeacherPaymentsFile.json";
import FooterAIMS from "../CommonComponents/Footer";
import AttendanceTable from "../CommonComponents/TeacherAttendanceTable";
import AttendanceFileJson from "../JSONFiles/TeacherAttendanceFile.json";

const Teacher = () => {
  const history = useHistory;
  const [selectedOption, setSelectedOption] = useState("Payment Info");
  const [selectedDropdownResult, setSelectedDropdownResult] = useState("MCA");
  const [selectedDropdownAttendance, setSelectedDropdownAttendance] =
    useState("MCA");
  const [teacherDivisionAttendance, setTeacherDivisionAttendance] = useState(
    []
  );
  const [teacherDivisionResult, setTeacherDivisionResult] = useState([]);

  const handleOptionClick = (option) => {
    if (option === "Logout") {
      HandleNavigation("/login");
    } else {
      setSelectedOption(option);
    }
  };

  const resultDropdownOptions = [
    { label: "MCA", value: "MCA" },
    { label: "MBA", value: "MBA" },
    { label: "BCA", value: "BCA" },
    { label: "M.COM", value: "M.COM" },
    { label: "MFA", value: "MFA" },
  ];

  const HandleNavigation = (path) => {
    window.location.href = path;
  };

  const HandleResultDropdownChange = (event) => {
    setSelectedDropdownResult(event.target.value);
  };

  const HandleAttendanceDropdownChange = (event) => {
    setSelectedDropdownAttendance(event.target.value);
  };

  const fetchData = () => {
    const divisionData = TeacherResultFileData[selectedDropdownResult] || [];
    setTeacherDivisionResult(divisionData);
  };

  const fetchDataAttendance = () => {
    const divisionAttendanceData =
      AttendanceFileJson.attendanceSheet[selectedDropdownAttendance] || [];
    setTeacherDivisionAttendance(divisionAttendanceData);
  };

  useEffect(() => {
    document.title = "FacultyPortal";
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedDropdownResult]);

  useEffect(() => {
    fetchDataAttendance();
  }, [selectedDropdownAttendance]);

  return (
    <div>
      <header>
        <div className="logosec">
          <div className="logo">
            <li className="nav-item" onClick={() => HandleNavigation("/")}>
              AIMS
            </li>
          </div>
        </div>

        <div className="FacultyDash">Faculty Dashboard</div>
      </header>

      <div className="main-container">
        <div className="navcontainer">
          <nav className="nav">
            <div className="nav-upper-options">
              <div
                className={`nav-option option2 ${
                  selectedOption === "Payment Info" ? "selected" : ""
                }`}
                onClick={() => handleOptionClick("Payment Info")}
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                  className="nav-img"
                  alt="articles"
                />
                <h3>Payment Info</h3>
              </div>

              <div
                className={`nav-option option3 ${
                  selectedOption === "Courses" ? "selected" : ""
                }`}
                onClick={() => handleOptionClick("Courses")}
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                  className="nav-img"
                  alt="report"
                />
                <h3>Courses</h3>
              </div>

              <div
                className={`nav-option option4 ${
                  selectedOption === "Result" ? "selected" : ""
                }`}
                onClick={() => handleOptionClick("Result")}
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                  className="nav-img"
                  alt="institution"
                />
                <h3>Result</h3>
              </div>

              <div
                className={`nav-option option5 ${
                  selectedOption === "Attendence" ? "selected" : ""
                }`}
                onClick={() => handleOptionClick("Attendence")}
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                  className="nav-img"
                  alt="blog"
                />
                <h3>Attendence</h3>
              </div>

              <div
                className="nav-option logout"
                onClick={() => handleOptionClick("Logout")}
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                  className="nav-img"
                  alt="logout"
                />
                <h3>Logout</h3>
              </div>
            </div>
          </nav>
        </div>
        {selectedOption === "Payment Info" && (
          <div className="tableContainer">
            <TeacherPaymentTable data={TeacherPaymentData.payments} />
            <SnackBar
              message="Last payment details successfully fetched"
              severity="success"
            />
          </div>
        )}
        {selectedOption === "Courses" && (
          <div className="coursesContainer">
            <TeacherCoursesTable />
          </div>
        )}
        {selectedOption === "Result" && (
          <div className="mainResultContainer">
            <div className="dropdowmResult">
              <div className="courseName">
                To check Result select department
              </div>
              <div className="dropdownContainer">
                <SingleSelect
                  options={resultDropdownOptions}
                  value={selectedDropdownResult}
                  onChange={HandleResultDropdownChange}
                />
              </div>
            </div>

            {teacherDivisionResult.length !== 0 ? (
              <div className="resultTableContainer">
                <TeacherResultFile data={teacherDivisionResult} />
              </div>
            ) : (
              <div>No Data Exists</div>
            )}
          </div>
        )}
        {selectedOption === "Attendence" && (
          <div className="mainResultContainer">
            <div className="dropdowmResult">
              <div className="courseName">
                To Check Attendance select department
              </div>
              <div className="dropdownContainer">
                <SingleSelect
                  options={resultDropdownOptions}
                  value={selectedDropdownAttendance}
                  onChange={HandleAttendanceDropdownChange}
                />
              </div>
            </div>
            {teacherDivisionAttendance.length !== 0 ? (
              <div className="resultTableContainer">
                <AttendanceTable data={teacherDivisionAttendance} />
              </div>
            ) : (
              <div>No Data Exists</div>
            )}
          </div>
        )}
      </div>
      <div className="TeacherFooter" style={{ marginTop: "5rem" }}>
        <FooterAIMS />
      </div>
    </div>
  );
};
export default Teacher;
