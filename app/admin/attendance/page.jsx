"use client"

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Calendar,
  Clock,
  Users,
  UserCheck,
  UserX,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  Eye,
  Plus,
  Printer,
  Mail,
  Edit,
  MoreHorizontal
} from 'lucide-react';

const AttendancePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('daily'); // daily, weekly, monthly

  // Mock attendance data
  const attendanceData = [
    {
      id: 1,
      studentName: "Oyibo Daniel",
      studentId: "STD001",
      class: "SSS 2A",
      department: "Science",
      status: "present",
      timeIn: "07:45 AM",
      timeOut: "02:30 PM",
      date: "2024-12-19",
      weeklyAttendance: 95,
      monthlyAttendance: 92,
      totalDays: 20,
      presentDays: 19,
      absentDays: 1,
      lateDays: 2
    },
    {
      id: 2,
      studentName: "Marvel Oghenekevwe",
      studentId: "STD003",
      class: "SSS 2A",
      department: "Science",
      status: "late",
      timeIn: "08:15 AM",
      timeOut: "02:30 PM",
      date: "2024-12-19",
      weeklyAttendance: 88,
      monthlyAttendance: 85,
      totalDays: 20,
      presentDays: 17,
      absentDays: 3,
      lateDays: 5
    },
    {
      id: 3,
      studentName: "Oyibo Grace",
      studentId: "STD342",
      class: "SSS 2B",
      department: "Commercial",
      status: "absent",
      timeIn: null,
      timeOut: null,
      date: "2024-12-19",
      weeklyAttendance: 70,
      monthlyAttendance: 75,
      totalDays: 20,
      presentDays: 15,
      absentDays: 5,
      lateDays: 1
    },
    {
      id: 4,
      studentName: "Tolani Taye",
      studentId: "STD007",
      class: "SSS 2C",
      department: "Art",
      status: "present",
      timeIn: "07:50 AM",
      timeOut: "02:30 PM",
      date: "2024-12-19",
      weeklyAttendance: 100,
      monthlyAttendance: 98,
      totalDays: 20,
      presentDays: 20,
      absentDays: 0,
      lateDays: 0
    },
    {
      id: 5,
      studentName: "Ohis Vic",
      studentId: "STD398",
      class: "SSS 2A",
      department: "Science",
      status: "present",
      timeIn: "07:40 AM",
      timeOut: "02:25 PM",
      date: "2024-12-19",
      weeklyAttendance: 92,
      monthlyAttendance: 89,
      totalDays: 20,
      presentDays: 18,
      absentDays: 2,
      lateDays: 3
    }
  ];

  // Calculate statistics
  const stats = useMemo(() => {
    const totalStudents = attendanceData.length;
    const presentStudents = attendanceData.filter(s => s.status === 'present').length;
    const absentStudents = attendanceData.filter(s => s.status === 'absent').length;
    const lateStudents = attendanceData.filter(s => s.status === 'late').length;
    const attendanceRate = ((presentStudents + lateStudents) / totalStudents * 100).toFixed(1);

    return [
      {
        title: "Total Students",
        value: totalStudents.toString(),
        icon: Users,
        trend: "0",
        trendDirection: "neutral",
        color: "blue"
      },
      {
        title: "Present Today",
        value: presentStudents.toString(),
        icon: UserCheck,
        trend: "+2",
        trendDirection: "up",
        color: "green"
      },
      {
        title: "Absent Today",
        value: absentStudents.toString(),
        icon: UserX,
        trend: "-1",
        trendDirection: "down",
        color: "red"
      },
      {
        title: "Attendance Rate",
        value: `${attendanceRate}%`,
        icon: CheckCircle,
        trend: "+1.2%",
        trendDirection: "up",
        color: "emerald"
      }
    ];
  }, [attendanceData]);

  // Get unique classes for filter
  const classes = useMemo(() => {
    const uniqueClasses = [...new Set(attendanceData.map(student => student.class))];
    const classCounts = uniqueClasses.map(cls => ({
      id: cls.toLowerCase().replace(' ', '-'),
      name: cls,
      count: attendanceData.filter(student => student.class === cls).length
    }));
    return [
      { id: 'all', name: 'All Classes', count: attendanceData.length },
      ...classCounts
    ];
  }, []);

  // Filter students based on search and filters
  const filteredAttendance = useMemo(() => {
    return attendanceData.filter(student => {
      const matchesSearch = student.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           student.studentId.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesClass = selectedClass === 'all' || 
                          student.class.toLowerCase().replace(' ', '-') === selectedClass;
      const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus;
      return matchesSearch && matchesClass && matchesStatus;
    });
  }, [searchQuery, selectedClass, selectedStatus]);

  const getStatusColor = (status) => {
    const colors = {
      present: 'text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30',
      absent: 'text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30',
      late: 'text-yellow-700 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30',
      excused: 'text-blue-700 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30'
    };
    return colors[status] || 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'present': return <CheckCircle size={14} className="text-green-600" />;
      case 'absent': return <XCircle size={14} className="text-red-600" />;
      case 'late': return <Clock size={14} className="text-yellow-600" />;
      case 'excused': return <AlertTriangle size={14} className="text-blue-600" />;
      default: return <Clock size={14} className="text-gray-600" />;
    }
  };

  const getAttendanceRateColor = (rate) => {
    if (rate >= 95) return 'text-green-600';
    if (rate >= 85) return 'text-blue-600';
    if (rate >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const handleMarkAttendance = (studentId, status) => {
    console.log(`Marking ${studentId} as ${status}`);
  };

  const handleBulkAction = (action) => {
    console.log(`Bulk action: ${action}`);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedClass('all');
    setSelectedStatus('all');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-3 sm:p-4 lg:p-6 transition-colors duration-200">
      <div className="max-w-7xl mx-auto space-y-4 lg:space-y-6">
        
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">Attendance Management</h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">Track and manage student attendance across all classes</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <div className="flex gap-2">
                <button 
                  onClick={() => handleBulkAction('export')}
                  className="bg-blue-600 text-white px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Export</span>
                </button>
                <button 
                  onClick={() => handleBulkAction('print')}
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
                <div className={`p-2 lg:p-3 rounded-full ${
                  stat.color === 'green' ? 'bg-green-600' :
                  stat.color === 'red' ? 'bg-red-600' :
                  stat.color === 'emerald' ? 'bg-emerald-600' :
                  'bg-blue-600'
                } flex-shrink-0`}>
                  <stat.icon size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Mode Toggle & Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-4">
            {/* View Mode Toggle */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                {['daily', 'weekly', 'monthly'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === mode
                        ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={() => handleBulkAction('mark-all-present')}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm"
              >
                <UserCheck size={14} />
                Mark All Present
              </button>
            </div>

            {/* Search and Filters */}
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
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {classes.map(cls => (
                    <option key={cls.id} value={cls.id}>
                      {cls.name} ({cls.count})
                    </option>
                  ))}
                </select>
                
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="flex-1 sm:flex-initial px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="all">All Status</option>
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                  <option value="late">Late</option>
                  <option value="excused">Excused</option>
                </select>
                
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm text-gray-700 dark:text-gray-300">
                  <Filter size={14} />
                  <span className="hidden sm:inline">More</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-4 lg:p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {viewMode.charAt(0).toUpperCase() + viewMode.slice(1)} Attendance - {selectedDate}
            </h3>
            
            <div className="space-y-3">
              {filteredAttendance.map((student) => (
                <div key={student.id} className="flex flex-col lg:flex-row lg:items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  
                  {/* Student Info */}
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {student.studentName.charAt(0)}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm lg:text-base truncate">
                          {student.studentName}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{student.studentId}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{student.class}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{student.department}</span>
                        <span className={`text-xs font-medium ${getAttendanceRateColor(student.monthlyAttendance)}`}>
                          {student.monthlyAttendance}% Monthly
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status & Time Info */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3 lg:mt-0">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(student.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                        {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                      </span>
                    </div>
                    
                    {student.timeIn && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        In: {student.timeIn}
                        {student.timeOut && ` | Out: ${student.timeOut}`}
                      </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleMarkAttendance(student.id, 'present')}
                        className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg transition-colors"
                        title="Mark Present"
                      >
                        <UserCheck size={14} />
                      </button>
                      <button
                        onClick={() => handleMarkAttendance(student.id, 'absent')}
                        className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        title="Mark Absent"
                      >
                        <UserX size={14} />
                      </button>
                      <button
                        onClick={() => handleMarkAttendance(student.id, 'late')}
                        className="p-2 text-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 rounded-lg transition-colors"
                        title="Mark Late"
                      >
                        <Clock size={14} />
                      </button>
                      <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                        <MoreHorizontal size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredAttendance.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 lg:p-12 text-center border border-gray-200 dark:border-gray-700">
            <div className="text-3xl lg:text-4xl mb-4">📅</div>
            <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">No attendance records found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm lg:text-base">Try adjusting your search criteria or filters</p>
            <button 
              onClick={clearFilters}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {classes.filter(cls => cls.id !== 'all').map((cls) => {
            const classStudents = attendanceData.filter(student => 
              student.class.toLowerCase().replace(' ', '-') === cls.id
            );
            const presentCount = classStudents.filter(s => s.status === 'present').length;
            const totalCount = classStudents.length;
            const attendanceRate = totalCount > 0 ? ((presentCount / totalCount) * 100).toFixed(1) : '0';

            return (
              <div key={cls.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">{cls.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">Total:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{totalCount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">Present:</span>
                      <span className="font-medium text-green-600">{presentCount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">Rate:</span>
                      <span className={`font-medium ${getAttendanceRateColor(parseFloat(attendanceRate))}`}>
                        {attendanceRate}%
                      </span>
                    </div>
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

export default AttendancePage;