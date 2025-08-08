"use client"

import { Bell, Focus, Lightbulb, Moon, Sun } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

const Topbar = () => {
  const [lightMode, setLightMode] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

  function toggleTheme() {
    setLightMode((prev) => !prev);
  }

  function toggleNotifications() {
    setShowNotifications((prev) => !prev);
  }

  return (
    <div>
      <div className="flex justify-end items-center gap-4 p-4">
        <div className="notification-bell">
          <Button onClick={toggleNotifications} variant="primary" className="rounded-full ">
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
          <Button variant="primary" className="rounded-full bg-white">
            <Focus size={20} />
          </Button>
        </div>
        <div>
          <Button
            onClick={toggleTheme}
            variant="primary"
            className="rounded-full "
          >
            {lightMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
