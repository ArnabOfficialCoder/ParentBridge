import React, { useState, useEffect } from "react";
import FooterAIMS from "../CommonComponents/Footer";
import CustomSnackbar from "../CommonComponents/SnackBar";
import parentPaymentData from "../JSONFiles/ParentPaymentFile.json";
import ParentPaymentTable from "../CommonComponents/ParentPaymentTable";
import ParentCoursesTable from "../CommonComponents/ParentCoursesTable";
import ParentResultFileData from "../JSONFiles/ParentResultFile.json";
import TeacherResultFile from "../CommonComponents/TeacherResultFile";
import AttendanceTable from "../CommonComponents/TeacherAttendanceTable";
import AttendanceFileJson from "../JSONFiles/ParentAttendanceFile.json";
import "./Style.css";

const Parent = () => {
  const [selectedOption, setSelectedOption] = useState("Payment Info");
  const [teacherDivisionResult, setTeacherDivisionResult] = useState([]);
  const [teacherDivisionAttendance, setTeacherDivisionAttendance] = useState(
    []
  );

  const HandleNavigation = (path) => {
    window.location.href = path;
  };

  const handleOptionClickParent = (value) => {
    if (value === "Logout") {
      HandleNavigation("/login");
    } else {
      setSelectedOption(value);
    }
  };

  const fetchData = () => {
    const divisionData = ParentResultFileData["MCA"] || [];
    setTeacherDivisionResult(divisionData);
  };

  const fetchDataAttendance = () => {
    const divisionAttendanceData =
      AttendanceFileJson.attendanceSheet["MCA"] || [];
    setTeacherDivisionAttendance(divisionAttendanceData);
  };

  useEffect(() => {
    fetchData();
    fetchDataAttendance();
    document.title = "Parent";
  }, []);

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

        <div className="FacultyDash">Parent Dashboard</div>
      </header>

      <div className="main-container">
        <div className="navcontainer">
          <nav className="nav">
            <div className="nav-upper-options">
              <div
                className={`nav-option option2 ${
                  selectedOption === "Payment Info" ? "selected" : ""
                }`}
                onClick={() => handleOptionClickParent("Payment Info")}
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
                  selectedOption === "Classes" ? "selected" : ""
                }`}
                onClick={() => handleOptionClickParent("Classes")}
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                  className="nav-img"
                  alt="report"
                />
                <h3>Classes</h3>
              </div>

              <div
                className={`nav-option option4 ${
                  selectedOption === "Result" ? "selected" : ""
                }`}
                onClick={() => handleOptionClickParent("Result")}
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
                onClick={() => handleOptionClickParent("Attendence")}
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                  className="nav-img"
                  alt="blog"
                />
                <h3>Attendence</h3>
              </div>

              {/* <div
                className="nav-option logout"
                onClick={handleOptionClickParent("Logout")}
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                  className="nav-img"
                  alt="logout"
                />
                <h3>Logout</h3>
              </div> */}
            </div>
          </nav>
        </div>
        {selectedOption === "Payment Info" && (
          <div className="tableContainer">
            <ParentPaymentTable data={parentPaymentData.payments} />
            <CustomSnackbar
              message="Payment details successfully fetched"
              severity="success"
            />
          </div>
        )}
        {selectedOption === "Classes" && (
          <div className="coursesContainer">
            <ParentCoursesTable />
          </div>
        )}
        {selectedOption === "Result" && (
          <div className="mainResultContainer">
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
export default Parent;
