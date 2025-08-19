"use client"

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  TrendingUp, 
  TrendingDown, 
  Award, 
  Users,
  BookOpen,
  BarChart3,
  Calendar,
  Star,
  AlertCircle,
  ChevronDown,
  Printer,
  Mail,
  Plus
} from 'lucide-react';

// Import from the data file
import studentResults, { getAverageScore, getTopPerformers, getDepartmentStats } from '@/data/students';

const ResultsPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedTerm, setSelectedTerm] = useState('current');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  
  // Calculate statistics using helper functions
  const stats = useMemo(() => {
    const totalStudents = studentResults.length;
    const averageScore = getAverageScore();
    const topPerformers = studentResults.filter(student => student.overallGrade.startsWith('A')).length;
    const uniqueSubjects = new Set();
    studentResults.forEach(student => {
      student.subjects.forEach(subject => uniqueSubjects.add(subject.name));
    });

    return [
      {
        title: "Total Students",
        value: totalStudents.toString(),
        icon: Users,
        trend: "+12",
        trendDirection: "up"
      },
      {
        title: "Average Score",
        value: `${averageScore}%`,
        icon: BarChart3,
        trend: "+2.3%",
        trendDirection: "up"
      },
      {
        title: "Top Performers",
        value: topPerformers.toString(),
        icon: Award,
        trend: "+8",
        trendDirection: "up"
      },
      {
        title: "Subjects",
        value: uniqueSubjects.size.toString(),
        icon: BookOpen,
        trend: "0",
        trendDirection: "neutral"
      }
    ];
  }, []);

  // Get unique departments for filter
  const departments = useMemo(() => {
    const uniqueDepts = [...new Set(studentResults.map(student => student.department))];
    const deptCounts = uniqueDepts.map(dept => ({
      id: dept.toLowerCase(),
      name: dept.charAt(0).toUpperCase() + dept.slice(1),
      count: studentResults.filter(student => student.department === dept).length
    }));
    return [
      { id: 'all', name: 'All Departments', count: studentResults.length },
      ...deptCounts
    ];
  }, []);

  // Get avatar based on gender
  const getAvatar = (gender) => {
    return gender === "Male" ? "👨‍🎓" : "👩‍🎓";
  };

  const getGradeColor = (grade) => {
    if (!grade) return 'text-gray-600 bg-gray-50 dark:text-gray-400 dark:bg-gray-700';
    
    const baseColors = {
      A: 'text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-900/30',
      B: 'text-blue-700 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30',
      C: 'text-yellow-700 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30',
      D: 'text-orange-700 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30',
      F: 'text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30'
    };
    
    return baseColors[grade[0]] || 'text-gray-600 bg-gray-50 dark:text-gray-400 dark:bg-gray-700';
  };

  // Filter students based on search and filters
  const filteredResults = useMemo(() => {
    return studentResults.filter(student => {
      const matchesSearch = student.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           student.studentId.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDepartment = selectedDepartment === 'all' || 
                               student.department.toLowerCase() === selectedDepartment.toLowerCase();
      const matchesGrade = selectedGrade === 'all' || 
                          student.overallGrade.startsWith(selectedGrade);
      return matchesSearch && matchesDepartment && matchesGrade;
    });
  }, [searchQuery, selectedDepartment, selectedGrade]);

  const handleExport = () => {
    console.log('Export functionality would be implemented here');
  };

  const handlePrint = () => {
    console.log('Print functionality would be implemented here');
  };

  const handleViewDetails = (studentId) => {
    console.log('View details for student:', studentId);
  };

  const handleDownload = (studentId) => {
    console.log('Download for student:', studentId);
  };

  const handleEmail = (studentId) => {
    console.log('Email student:', studentId);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDepartment('all');
    setSelectedGrade('all');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-3 sm:p-4 lg:p-6 transition-colors duration-200">
      <div className="max-w-7xl mx-auto space-y-4 lg:space-y-6">
        
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">Academic Results</h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">Monitor and analyze student performance across all departments</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <select 
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="current">Current Term</option>
                <option value="previous">Previous Term</option>
                <option value="annual">Annual Report</option>
              </select>
              <div className="flex gap-2">
                <button 
                  onClick={handleExport}
                  className="bg-blue-600 text-white px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Export</span>
                </button>
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-3 lg:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm text-gray-700 dark:text-gray-300"
                >
                  <Printer size={14} />
                  <span className="hidden sm:inline">Print</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 lg:p-6 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between w-full">
                <div className="flex-1 min-w-0">
                  <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 mb-1">{stat.title}</p>
                  <p className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white truncate">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {stat.trendDirection === 'up' ? (
                      <TrendingUp size={12} className="text-green-600" />
                    ) : stat.trendDirection === 'down' ? (
                      <TrendingDown size={12} className="text-red-600" />
                    ) : null}
                    <span className={`text-xs font-medium ${
                      stat.trendDirection === 'up' ? 'text-green-600' : 
                      stat.trendDirection === 'down' ? 'text-red-600' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {stat.trend}
                    </span>
                  </div>
                </div>
                <div className="p-2 lg:p-3 rounded-full bg-blue-600 flex-shrink-0">
                  <stat.icon size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search students by name or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name} ({dept.count})
                  </option>
                ))}
              </select>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="flex-1 sm:flex-initial px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="all">All Grades</option>
                <option value="A">A Grade</option>
                <option value="B">B Grade</option>
                <option value="C">C Grade</option>
                <option value="D">D Grade</option>
                <option value="F">F Grade</option>
              </select>
              <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm text-gray-700 dark:text-gray-300">
                <Filter size={14} />
                <span className="hidden sm:inline">More</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {filteredResults.map((student) => (
            <div key={student.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="p-4 lg:p-6">
                {/* Student Header */}
                <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="text-xl lg:text-2xl flex-shrink-0">{getAvatar(student.gender)}</div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base truncate">{student.studentName}</h3>
                        <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300">{student.studentId} • {student.year}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{student.department} Dept.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {student.trend === 'up' ? (
                        <TrendingUp size={14} className="text-green-600" />
                      ) : student.trend === 'down' ? (
                        <TrendingDown size={14} className="text-red-600" />
                      ) : null}
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-300">#{student.position}</span>
                    </div>
                  </div>
                  
                  {/* Overall Grade */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium ${getGradeColor(student.overallGrade)}`}>
                        {student.overallGrade}
                      </div>
                      <span className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">{student.percentage}%</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={i < Math.floor(student.percentage / 20) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subjects */}
                <div className="py-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 text-sm lg:text-base">Subject Performance</h4>
                  <div className="space-y-2">
                    {student.subjects.slice(0, 3).map((subject, index) => (
                      <div key={index} className="flex items-center justify-between gap-2">
                        <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 truncate flex-1">{subject.name}</span>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <div className="w-12 lg:w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                              style={{ width: `${subject.score}%` }}
                            ></div>
                          </div>
                          <span className={`text-xs px-1.5 lg:px-2 py-0.5 lg:py-1 rounded ${getGradeColor(subject.grade)}`}>
                            {subject.grade}
                          </span>
                        </div>
                      </div>
                    ))}
                    {student.subjects.length > 3 && (
                      <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                        +{student.subjects.length - 3} more subjects
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Student Info & Actions */}
              <div className="px-4 lg:px-6 py-3 lg:py-4 bg-gray-50 dark:bg-gray-700/50 rounded-b-lg">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    <div>Attendance: <span className="font-medium text-blue-600">{student.attendance}</span></div>
                    <div>Rank: <span className="font-medium">{student.classRank}</span></div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
                    <div className="truncate max-w-[100px]">{student.email}</div>
                    <div>{student.phone}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleViewDetails(student.id)}
                    className="flex-1 bg-blue-600 text-white text-xs lg:text-sm px-2 lg:px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 lg:gap-2"
                  >
                    <Eye size={12} />
                    <span>View</span>
                  </button>
                  <button 
                    onClick={() => handleDownload(student.id)}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                  >
                    <Download size={12} />
                  </button>
                  <button 
                    onClick={() => handleEmail(student.id)}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                  >
                    <Mail size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredResults.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 lg:p-12 text-center border border-gray-200 dark:border-gray-700">
            <div className="text-3xl lg:text-4xl mb-4">📊</div>
            <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">No results found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm lg:text-base">Try adjusting your search criteria or filters</p>
            <button 
              onClick={clearFilters}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredResults.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Showing {filteredResults.length} of {studentResults.length} students
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm text-gray-700 dark:text-gray-300">
                  Previous
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm">1</button>
                <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm text-gray-700 dark:text-gray-300">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Department Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {departments.filter(dept => dept.id !== 'all').map((dept) => {
            const deptStudents = studentResults.filter(student => 
              student.department.toLowerCase() === dept.id.toLowerCase()
            );
            const avgScore = deptStudents.length > 0 
              ? (deptStudents.reduce((sum, student) => sum + student.percentage, 0) / deptStudents.length).toFixed(1)
              : '0';
            const topStudent = deptStudents.length > 0
              ? deptStudents.reduce((top, student) => 
                  student.percentage > top.percentage ? student : top, deptStudents[0]
                )
              : null;

            return (
              <div key={dept.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2 capitalize">{dept.name} Department</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">Students:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{dept.count}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">Average:</span>
                      <span className="font-medium text-blue-600">{avgScore}%</span>
                    </div>
                    {topStudent && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Top Student:</span>
                        <span className="font-medium text-green-600">
                          {topStudent.studentName.split(' ')[0]}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;