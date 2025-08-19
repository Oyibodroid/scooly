"use client";

import Link from "next/link";
import { ArrowLeft, Pen, Phone, Mail, MapPin, Book, GraduationCap, UserCircle } from "lucide-react";
import Button from "@/components/Button";

export default function StudentDetailClient({ student }) {
  return (
    <div className="student-detail-container">
      <div className="student-detail-header">
        <Link href="./list" className="back-link">
          <ArrowLeft size={20} />
          <span>back</span>
        </Link>
        <h1 className="page-title">Student Details</h1>
      </div>

      <div className="student-detail-grid">
        {/* Profile Card */}
        <div className="student-profile-card">
          <div className="profile-image-container">
            <img
              className="profile-image"
              src={student.gender === "Male" ? "/images/male-avatar.svg" : "/images/female-avatar.svg"}
              alt={`${student.studentName}'s avatar`}
            />
            <Button variant="outline" className="edit-profile-btn">
              <Pen size={16} />
            </Button>
          </div>
          <h2 className="profile-name">{student.studentName}</h2>
          <div className="profile-contact">
            <div className="contact-item">
              <Phone size={16} />
              <span>{student.phone}</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>{student.email}</span>
            </div>
          </div>
        </div>

        {/* General Info Card */}
        <div className="info-card">
          <div className="info-card-header">
            <h3 className="info-card-title">General Info</h3>
            <Button variant="outline" className="edit-btn">
              <Pen size={16} />
            </Button>
          </div>

          <div className="info-list">
            <div className="info-item">
              <Book size={16} />
              <span className="info-label">Class:</span>
              <span className="info-value">{student.year}</span>
            </div>
            <div className="info-item">
              <GraduationCap size={16} />
              <span className="info-label">Department:</span>
              <span className="info-value">{student.department.toUpperCase()}</span>
            </div>
            <div className="info-item">
              <UserCircle size={16} />
              <span className="info-label">Gender:</span>
              <span className="info-value">{student.gender}</span>
            </div>
            <div className="info-item">
              <MapPin size={16} />
              <span className="info-label">Address:</span>
              <span className="info-value">{student.address || 'Not provided'}</span>
            </div>
          </div>
        </div>

        {/* Academic Performance Card */}
        <div className="info-card">
          <div className="info-card-header">
            <h3 className="info-card-title">Academic Performance</h3>
          </div>
          <div className="performance-stats">
            <div className="stat-item">
              <span className="stat-label">Attendance</span>
              <span className="stat-value">95%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Average Grade</span>
              <span className="stat-value">A</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Class Rank</span>
              <span className="stat-value">5th</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}