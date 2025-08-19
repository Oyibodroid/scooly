// data/studentResults.js

const studentResults = [
  {
    id: 1,
    studentName: "Oyibo Daniel",
    studentId: "STD001",
    department: "science",
    year: "SSS 2",
    phone: "07079806360",
    gender: "Male",
    email: "oyibodaniel247@gmail.com",
    overallGrade: "A",
    percentage: 92.5,
    subjects: [
      { name: "Mathematics", grade: "A+", score: 95 },
      { name: "Physics", grade: "A", score: 91 },
      { name: "Chemistry", grade: "A", score: 89 },
      { name: "English Language", grade: "A", score: 94 },
      { name: "Biology", grade: "A", score: 93 },
      { name: "Further Mathematics", grade: "A", score: 90 }
    ],
    position: 1,
    trend: "up",
    attendance: "95%",
    classRank: "1st",
    term: "current",
    academicYear: "2024/2025",
    // Attendance Records
    attendanceRecords: {
      weeklyAttendance: 95,
      monthlyAttendance: 92,
      totalDays: 20,
      presentDays: 19,
      absentDays: 1,
      lateDays: 2,
      excusedDays: 0,
      dailyRecords: [
        { date: "2024-12-19", status: "present", timeIn: "07:45 AM", timeOut: "02:30 PM" },
        { date: "2024-12-18", status: "present", timeIn: "07:40 AM", timeOut: "02:35 PM" },
        { date: "2024-12-17", status: "late", timeIn: "08:10 AM", timeOut: "02:30 PM" },
        { date: "2024-12-16", status: "present", timeIn: "07:50 AM", timeOut: "02:25 PM" },
        { date: "2024-12-13", status: "present", timeIn: "07:35 AM", timeOut: "02:40 PM" }
      ]
    }
  },
  {
    id: 3,
    studentName: "Marvel Oghenekevwe",
    studentId: "STD003",
    department: "science",
    year: "SSS 2",
    phone: "07079806360",
    gender: "Female",
    email: "marvel.oghenekevwe@gmail.com",
    overallGrade: "A",
    percentage: 89.2,
    subjects: [
      { name: "Mathematics", grade: "A", score: 92 },
      { name: "Physics", grade: "A", score: 88 },
      { name: "Chemistry", grade: "B+", score: 85 },
      { name: "English Language", grade: "A", score: 91 },
      { name: "Biology", grade: "A", score: 90 },
      { name: "Further Mathematics", grade: "B+", score: 87 }
    ],
    position: 2,
    trend: "up",
    attendance: "92%",
    classRank: "2nd",
    term: "current",
    academicYear: "2024/2025",
    attendanceRecords: {
      weeklyAttendance: 88,
      monthlyAttendance: 85,
      totalDays: 20,
      presentDays: 17,
      absentDays: 3,
      lateDays: 5,
      excusedDays: 0,
      dailyRecords: [
        { date: "2024-12-19", status: "late", timeIn: "08:15 AM", timeOut: "02:30 PM" },
        { date: "2024-12-18", status: "present", timeIn: "07:55 AM", timeOut: "02:30 PM" },
        { date: "2024-12-17", status: "absent", timeIn: null, timeOut: null },
        { date: "2024-12-16", status: "late", timeIn: "08:20 AM", timeOut: "02:30 PM" },
        { date: "2024-12-13", status: "present", timeIn: "07:45 AM", timeOut: "02:30 PM" }
      ]
    }
  },
  {
    id: 309,
    studentName: "Oyibo Jonathan",
    studentId: "STD309",
    department: "science",
    year: "SSS 2",
    phone: "07079806360",
    gender: "Male",
    email: "jonathan.oyibo@gmail.com",
    overallGrade: "B+",
    percentage: 85.7,
    subjects: [
      { name: "Mathematics", grade: "B+", score: 87 },
      { name: "Physics", grade: "B", score: 83 },
      { name: "Chemistry", grade: "B+", score: 86 },
      { name: "English Language", grade: "A", score: 89 },
      { name: "Biology", grade: "B+", score: 84 },
      { name: "Further Mathematics", grade: "B", score: 82 }
    ],
    position: 8,
    trend: "down",
    attendance: "88%",
    classRank: "8th",
    term: "current",
    academicYear: "2024/2025",
    attendanceRecords: {
      weeklyAttendance: 90,
      monthlyAttendance: 88,
      totalDays: 20,
      presentDays: 18,
      absentDays: 2,
      lateDays: 3,
      excusedDays: 0,
      dailyRecords: [
        { date: "2024-12-19", status: "present", timeIn: "07:55 AM", timeOut: "02:30 PM" },
        { date: "2024-12-18", status: "late", timeIn: "08:05 AM", timeOut: "02:30 PM" },
        { date: "2024-12-17", status: "present", timeIn: "07:50 AM", timeOut: "02:25 PM" },
        { date: "2024-12-16", status: "present", timeIn: "07:45 AM", timeOut: "02:35 PM" },
        { date: "2024-12-13", status: "absent", timeIn: null, timeOut: null }
      ]
    }
  },
  {
    id: 398,
    studentName: "Ohis Vic",
    studentId: "STD398",
    department: "science",
    year: "SSS 2",
    phone: "07079806360",
    gender: "Male",
    email: "ohis.vic@gmail.com",
    overallGrade: "B",
    percentage: 78.3,
    subjects: [
      { name: "Mathematics", grade: "B", score: 80 },
      { name: "Physics", grade: "B-", score: 75 },
      { name: "Chemistry", grade: "B", score: 79 },
      { name: "English Language", grade: "B+", score: 82 },
      { name: "Biology", grade: "B", score: 76 },
      { name: "Further Mathematics", grade: "C+", score: 73 }
    ],
    position: 15,
    trend: "up",
    attendance: "85%",
    classRank: "15th",
    term: "current",
    academicYear: "2024/2025",
    attendanceRecords: {
      weeklyAttendance: 92,
      monthlyAttendance: 89,
      totalDays: 20,
      presentDays: 18,
      absentDays: 2,
      lateDays: 3,
      excusedDays: 1,
      dailyRecords: [
        { date: "2024-12-19", status: "present", timeIn: "07:40 AM", timeOut: "02:25 PM" },
        { date: "2024-12-18", status: "present", timeIn: "07:45 AM", timeOut: "02:30 PM" },
        { date: "2024-12-17", status: "late", timeIn: "08:25 AM", timeOut: "02:30 PM" },
        { date: "2024-12-16", status: "present", timeIn: "07:35 AM", timeOut: "02:40 PM" },
        { date: "2024-12-13", status: "present", timeIn: "07:50 AM", timeOut: "02:30 PM" }
      ]
    }
  },
  {
    id: 323,
    studentName: "Ohis Davina",
    studentId: "STD323",
    department: "science",
    year: "SSS 2",
    phone: "07079806360",
    gender: "Female",
    email: "davina.ohis@gmail.com",
    overallGrade: "B+",
    percentage: 83.1,
    subjects: [
      { name: "Mathematics", grade: "B+", score: 85 },
      { name: "Physics", grade: "B", score: 81 },
      { name: "Chemistry", grade: "B+", score: 84 },
      { name: "English Language", grade: "B+", score: 86 },
      { name: "Biology", grade: "B", score: 80 },
      { name: "Further Mathematics", grade: "B", score: 83 }
    ],
    position: 12,
    trend: "up",
    attendance: "90%",
    classRank: "12th",
    term: "current",
    academicYear: "2024/2025",
    attendanceRecords: {
      weeklyAttendance: 95,
      monthlyAttendance: 90,
      totalDays: 20,
      presentDays: 18,
      absentDays: 1,
      lateDays: 1,
      excusedDays: 0,
      dailyRecords: [
        { date: "2024-12-19", status: "present", timeIn: "07:50 AM", timeOut: "02:30 PM" },
        { date: "2024-12-18", status: "present", timeIn: "07:45 AM", timeOut: "02:35 PM" },
        { date: "2024-12-17", status: "present", timeIn: "07:40 AM", timeOut: "02:30 PM" },
        { date: "2024-12-16", status: "late", timeIn: "08:10 AM", timeOut: "02:30 PM" },
        { date: "2024-12-13", status: "present", timeIn: "07:55 AM", timeOut: "02:25 PM" }
      ]
    }
  },
  {
    id: 342,
    studentName: "Oyibo Grace",
    studentId: "STD342",
    department: "Commercial",
    year: "SSS 2",
    phone: "07079806360",
    gender: "Female",
    email: "grace.oyibo@gmail.com",
    overallGrade: "A",
    percentage: 87.5,
    subjects: [
      { name: "Mathematics", grade: "B+", score: 85 },
      { name: "Economics", grade: "A", score: 90 },
      { name: "Accounting", grade: "A", score: 88 },
      { name: "English Language", grade: "A", score: 89 },
      { name: "Commerce", grade: "A", score: 87 },
      { name: "Government", grade: "B+", score: 86 }
    ],
    position: 3,
    trend: "up",
    attendance: "93%",
    classRank: "1st in Commercial",
    term: "current",
    academicYear: "2024/2025",
    attendanceRecords: {
      weeklyAttendance: 70,
      monthlyAttendance: 75,
      totalDays: 20,
      presentDays: 15,
      absentDays: 5,
      lateDays: 1,
      excusedDays: 2,
      dailyRecords: [
        { date: "2024-12-19", status: "absent", timeIn: null, timeOut: null },
        { date: "2024-12-18", status: "present", timeIn: "07:45 AM", timeOut: "02:30 PM" },
        { date: "2024-12-17", status: "present", timeIn: "07:50 AM", timeOut: "02:25 PM" },
        { date: "2024-12-16", status: "excused", timeIn: null, timeOut: null },
        { date: "2024-12-13", status: "present", timeIn: "07:40 AM", timeOut: "02:35 PM" }
      ]
    }
  },
  {
    id: 31,
    studentName: "Ohis Godswil",
    studentId: "STD031",
    department: "science",
    year: "SSS 2",
    phone: "07079806360",
    gender: "Male",
    email: "godswil.ohis@gmail.com",
    overallGrade: "B",
    percentage: 75.8,
    subjects: [
      { name: "Mathematics", grade: "B", score: 78 },
      { name: "Physics", grade: "C+", score: 72 },
      { name: "Chemistry", grade: "B", score: 77 },
      { name: "English Language", grade: "B", score: 79 },
      { name: "Biology", grade: "B-", score: 74 },
      { name: "Further Mathematics", grade: "C+", score: 75 }
    ],
    position: 18,
    trend: "down",
    attendance: "82%",
    classRank: "18th",
    term: "current",
    academicYear: "2024/2025",
    attendanceRecords: {
      weeklyAttendance: 80,
      monthlyAttendance: 82,
      totalDays: 20,
      presentDays: 16,
      absentDays: 3,
      lateDays: 4,
      excusedDays: 1,
      dailyRecords: [
        { date: "2024-12-19", status: "late", timeIn: "08:30 AM", timeOut: "02:30 PM" },
        { date: "2024-12-18", status: "absent", timeIn: null, timeOut: null },
        { date: "2024-12-17", status: "present", timeIn: "07:45 AM", timeOut: "02:30 PM" },
        { date: "2024-12-16", status: "late", timeIn: "08:15 AM", timeOut: "02:30 PM" },
        { date: "2024-12-13", status: "present", timeIn: "07:50 AM", timeOut: "02:25 PM" }
      ]
    }
  },
  {
    id: 5,
    studentName: "Tobi Kaftan",
    studentId: "STD005",
    department: "science",
    year: "SSS 2",
    phone: "07079806360",
    gender: "Female",
    email: "tobi.kaftan@gmail.com",
    overallGrade: "A",
    percentage: 88.9,
    subjects: [
      { name: "Mathematics", grade: "A", score: 91 },
      { name: "Physics", grade: "A", score: 87 },
      { name: "Chemistry", grade: "A", score: 89 },
      { name: "English Language", grade: "A", score: 90 },
      { name: "Biology", grade: "A", score: 88 },
      { name: "Further Mathematics", grade: "B+", score: 88 }
    ],
    position: 4,
    trend: "up",
    attendance: "96%",
    classRank: "4th",
    term: "current",
    academicYear: "2024/2025",
    attendanceRecords: {
      weeklyAttendance: 100,
      monthlyAttendance: 98,
      totalDays: 20,
      presentDays: 20,
      absentDays: 0,
      lateDays: 0,
      excusedDays: 0,
      dailyRecords: [
        { date: "2024-12-19", status: "present", timeIn: "07:30 AM", timeOut: "02:35 PM" },
        { date: "2024-12-18", status: "present", timeIn: "07:35 AM", timeOut: "02:30 PM" },
        { date: "2024-12-17", status: "present", timeIn: "07:40 AM", timeOut: "02:25 PM" },
        { date: "2024-12-16", status: "present", timeIn: "07:45 AM", timeOut: "02:30 PM" },
        { date: "2024-12-13", status: "present", timeIn: "07:30 AM", timeOut: "02:40 PM" }
      ]
    }
  },
  {
    id: 7,
    studentName: "Tolani Taye",
    studentId: "STD007",
    department: "Art",
    year: "SSS 2",
    phone: "07079806360",
    gender: "Female",
    email: "tolani.taye@gmail.com",
    overallGrade: "B+",
    percentage: 81.4,
    subjects: [
      { name: "Mathematics", grade: "B", score: 80 },
      { name: "English Language", grade: "A", score: 88 },
      { name: "Literature", grade: "A", score: 85 },
      { name: "Government", grade: "B+", score: 83 },
      { name: "History", grade: "B+", score: 82 },
      { name: "Christian Religious Studies", grade: "A", score: 90 }
    ],
    position: 2,
    trend: "up",
    attendance: "91%",
    classRank: "2nd in Arts",
    term: "current",
    academicYear: "2024/2025",
    attendanceRecords: {
      weeklyAttendance: 100,
      monthlyAttendance: 98,
      totalDays: 20,
      presentDays: 20,
      absentDays: 0,
      lateDays: 0,
      excusedDays: 0,
      dailyRecords: [
        { date: "2024-12-19", status: "present", timeIn: "07:50 AM", timeOut: "02:30 PM" },
        { date: "2024-12-18", status: "present", timeIn: "07:45 AM", timeOut: "02:35 PM" },
        { date: "2024-12-17", status: "present", timeIn: "07:55 AM", timeOut: "02:30 PM" },
        { date: "2024-12-16", status: "present", timeIn: "07:40 AM", timeOut: "02:25 PM" },
        { date: "2024-12-13", status: "present", timeIn: "07:50 AM", timeOut: "02:30 PM" }
      ]
    }
  },
  {
    id: 9,
    studentName: "Oyibo Daniel Oghenekevwe",
    studentId: "STD009",
    department: "science",
    year: "SSS 2",
    phone: "07079806360",
    gender: "Male",
    email: "daniel.oghenekevwe@gmail.com",
    overallGrade: "B",
    percentage: 77.2,
    subjects: [
      { name: "Mathematics", grade: "B", score: 79 },
      { name: "Physics", grade: "B-", score: 74 },
      { name: "Chemistry", grade: "B", score: 78 },
      { name: "English Language", grade: "B+", score: 81 },
      { name: "Biology", grade: "B", score: 76 },
      { name: "Further Mathematics", grade: "C+", score: 75 }
    ],
    position: 16,
    trend: "neutral",
    attendance: "87%",
    classRank: "16th",
    term: "current",
    academicYear: "2024/2025",
    attendanceRecords: {
      weeklyAttendance: 85,
      monthlyAttendance: 87,
      totalDays: 20,
      presentDays: 17,
      absentDays: 2,
      lateDays: 3,
      excusedDays: 1,
      dailyRecords: [
        { date: "2024-12-19", status: "present", timeIn: "07:55 AM", timeOut: "02:30 PM" },
        { date: "2024-12-18", status: "late", timeIn: "08:20 AM", timeOut: "02:30 PM" },
        { date: "2024-12-17", status: "present", timeIn: "07:45 AM", timeOut: "02:35 PM" },
        { date: "2024-12-16", status: "absent", timeIn: null, timeOut: null },
        { date: "2024-12-13", status: "present", timeIn: "07:40 AM", timeOut: "02:25 PM" }
      ]
    }
  },
  {
    id: 0,
    studentName: "Rodiat Abdul",
    studentId: "STD000",
    department: "science",
    year: "SSS 2",
    phone: "07079806360",
    gender: "Female",
    email: "rodiat.abdul@gmail.com",
    overallGrade: "B+",
    percentage: 84.6,
    subjects: [
      { name: "Mathematics", grade: "B+", score: 86 },
      { name: "Physics", grade: "B+", score: 84 },
      { name: "Chemistry", grade: "B+", score: 85 },
      { name: "English Language", grade: "A", score: 88 },
      { name: "Biology", grade: "B", score: 82 },
      { name: "Further Mathematics", grade: "B", score: 83 }
    ],
    position: 10,
    trend: "up",
    attendance: "89%",
    classRank: "10th",
    term: "current",
    academicYear: "2024/2025",
    attendanceRecords: {
      weeklyAttendance: 90,
      monthlyAttendance: 89,
      totalDays: 20,
      presentDays: 18,
      absentDays: 1,
      lateDays: 2,
      excusedDays: 1,
      dailyRecords: [
        { date: "2024-12-19", status: "present", timeIn: "07:45 AM", timeOut: "02:30 PM" },
        { date: "2024-12-18", status: "present", timeIn: "07:50 AM", timeOut: "02:25 PM" },
        { date: "2024-12-17", status: "late", timeIn: "08:05 AM", timeOut: "02:30 PM" },
        { date: "2024-12-16", status: "present", timeIn: "07:40 AM", timeOut: "02:35 PM" },
        { date: "2024-12-13", status: "excused", timeIn: null, timeOut: null }
      ]
    }
  }
];

// Helper functions for data processing
export const getStudentsByDepartment = (department) => {
  return studentResults.filter(student =>
    student.department.toLowerCase() === department.toLowerCase()
  );
};

export const getStudentsByYear = (year) => {
  return studentResults.filter(student => student.year === year);
};

export const getTopPerformers = (limit = 10) => {
  return studentResults
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, limit);
};

export const getAverageScore = () => {
  const total = studentResults.reduce((sum, student) => sum + student.percentage, 0);
  return (total / studentResults.length).toFixed(1);
};

export const getDepartmentStats = () => {
  const departments = {};
  studentResults.forEach(student => {
    const dept = student.department;
    if (!departments[dept]) {
      departments[dept] = { count: 0, totalScore: 0 };
    }
    departments[dept].count += 1;
    departments[dept].totalScore += student.percentage;
  });

  return Object.keys(departments).map(dept => ({
    name: dept,
    count: departments[dept].count,
    averageScore: (departments[dept].totalScore / departments[dept].count).toFixed(1)
  }));
};

export const getGradeDistribution = () => {
  const grades = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  studentResults.forEach(student => {
    const grade = student.overallGrade[0];
    if (grades[grade] !== undefined) {
      grades[grade] += 1;
    }
  });
  return grades;
};

// Attendance-specific helper functions
export const getAttendanceByDate = (date) => {
  return studentResults.map(student => {
    const dailyRecord = student.attendanceRecords.dailyRecords.find(
      record => record.date === date
    );
    
    return {
      ...student,
      todayAttendance: dailyRecord || { 
        date, 
        status: "unmarked", 
        timeIn: null, 
        timeOut: null 
      }
    };
  });
};

export const getAttendanceStats = (date = null) => {
  const attendanceData = date ? getAttendanceByDate(date) : studentResults;
  
  if (date) {
    const totalStudents = attendanceData.length;
    const presentStudents = attendanceData.filter(s => s.todayAttendance.status === 'present').length;
    const absentStudents = attendanceData.filter(s => s.todayAttendance.status === 'absent').length;
    const lateStudents = attendanceData.filter(s => s.todayAttendance.status === 'late').length;
    const excusedStudents = attendanceData.filter(s => s.todayAttendance.status === 'excused').length;
    const unmarkedStudents = attendanceData.filter(s => s.todayAttendance.status === 'unmarked').length;
    
    return {
      totalStudents,
      presentStudents,
      absentStudents,
      lateStudents,
      excusedStudents,
      unmarkedStudents,
      attendanceRate: ((presentStudents + lateStudents) / totalStudents * 100).toFixed(1)
    };
  }
  
  // Monthly stats
  const totalAttendanceRate = studentResults.reduce((sum, student) => 
    sum + student.attendanceRecords.monthlyAttendance, 0
  ) / studentResults.length;
  
  return {
    averageAttendanceRate: totalAttendanceRate.toFixed(1),
    totalStudents: studentResults.length
  };
};

export const getAttendanceByDepartment = (date = null) => {
  const departments = {};
  const attendanceData = date ? getAttendanceByDate(date) : studentResults;
  
  attendanceData.forEach(student => {
    const dept = student.department;
    if (!departments[dept]) {
      departments[dept] = {
        total: 0,
        present: 0,
        absent: 0,
        late: 0,
        excused: 0,
        unmarked: 0
      };
    }
    
    departments[dept].total += 1;
    
    if (date) {
      const status = student.todayAttendance.status;
      departments[dept][status] = (departments[dept][status] || 0) + 1;
    } else {
      // Use monthly attendance for overall stats
      const rate = student.attendanceRecords.monthlyAttendance;
      if (rate >= 95) departments[dept].present += 1;
      else if (rate >= 85) departments[dept].late += 1;
      else departments[dept].absent += 1;
    }
  });
  
  return Object.keys(departments).map(dept => ({
    name: dept,
    ...departments[dept],
    attendanceRate: ((departments[dept].present + departments[dept].late) / departments[dept].total * 100).toFixed(1)
  }));
};

export const updateAttendance = (studentId, date, status, timeIn = null, timeOut = null) => {
  const student = studentResults.find(s => s.id === studentId);
  if (!student) return false;
  
  const existingRecordIndex = student.attendanceRecords.dailyRecords.findIndex(
    record => record.date === date
  );
  
  const newRecord = { date, status, timeIn, timeOut };
  
  if (existingRecordIndex >= 0) {
    student.attendanceRecords.dailyRecords[existingRecordIndex] = newRecord;
  } else {
    student.attendanceRecords.dailyRecords.push(newRecord);
  }
  
  // Update monthly stats (simplified calculation)
  const totalRecords = student.attendanceRecords.dailyRecords.length;
  const presentRecords = student.attendanceRecords.dailyRecords.filter(
    r => r.status === 'present' || r.status === 'late'
  ).length;
  
  student.attendanceRecords.monthlyAttendance = Math.round((presentRecords / totalRecords) * 100);
  student.attendance = `${student.attendanceRecords.monthlyAttendance}%`;
  
  return true;
};

export default studentResults;