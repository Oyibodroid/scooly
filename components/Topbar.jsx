"use client"

import { Bell, Focus, Moon, Sun } from "lucide-react";
import Button from "./Button";
import { useState, useEffect } from "react";

const Topbar = () => {
  const [lightMode, setLightMode] = useState(true); // Default to light mode
  const [showNotifications, setShowNotifications] = useState(false);

  // Handle theme initialization after mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on localStorage or system preference
    if (savedTheme) {
      setLightMode(savedTheme === 'light');
    } else {
      setLightMode(!systemPrefersDark);
    }
  }, []);

  // Handle theme changes
  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    }
  }, [lightMode]);

  function toggleTheme() {
    setLightMode(prev => !prev);
  }

  function toggleNotifications() {
    setShowNotifications(prev => !prev);
  }

  return (
    <div className="topbar-container">
      <div className="topbar-controls">
        <div className="notification-bell">
          <Button onClick={toggleNotifications} variant="primary" className="notification-btn">
            <Bell size={20} />
          </Button>
          <span className="notification-alert"></span>
          {showNotifications && (
            <div className="notification-modal">
              <p>You have new notifications!</p>
              <Button onClick={toggleNotifications}>Close</Button>
            </div>
          )}
        </div>
        <div>
          <Button variant="primary" className="focus-btn">
            <Focus size={20} />
          </Button>
        </div>
        <div>
          <Button
            onClick={toggleTheme}
            variant="primary"
            className="theme-btn"
            aria-label={lightMode ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {lightMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;