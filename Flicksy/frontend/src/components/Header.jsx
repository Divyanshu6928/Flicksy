import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [location, setLocation] = useState({
    area: "Fetching your location...",
    deliveryTime: "-- minutes",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Calculate estimated delivery time
  const calculateDeliveryTime = (address) => {
    const lower = address.toLowerCase();

    if (
      lower.includes("metro") ||
      lower.includes("mall") ||
      lower.includes("central") ||
      lower.includes("main road")
    ) {
      return Math.floor(Math.random() * 8) + 10; // 10–18 min
    }

    if (
      lower.includes("layout") ||
      lower.includes("block") ||
      lower.includes("sector") ||
      lower.includes("colony")
    ) {
      return Math.floor(Math.random() * 10) + 15; // 15–25 min
    }

    if (
      lower.includes("phase") ||
      lower.includes("extension") ||
      lower.includes("cross")
    ) {
      return Math.floor(Math.random() * 15) + 20; // 20–35 min
    }

    return Math.floor(Math.random() * 10) + 18; // default: 18–28 min
  };

  // Reverse geocode
  const reverseGeocode = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=16&addressdetails=1`
      );
      if (!res.ok) throw new Error("Geocoding failed");

      const data = await res.json();
      const addr = data.address || {};
      const displayName = data.display_name || "";

      let formatted =
        [addr.road, addr.suburb || addr.neighbourhood, addr.city || addr.town]
          .filter(Boolean)
          .join(", ") || displayName.split(",").slice(0, 2).join(", ");

      if (formatted.length > 35) formatted = formatted.slice(0, 35) + "...";

      return formatted || "Location found";
    } catch (err) {
      console.error("Reverse geocoding error:", err);
      return "Current location";
    }
  };

  // Get user location
  const fetchLocation = async () => {
    setIsLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setLocation({ area: "Location not available", deliveryTime: "25 minutes" });
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const address = await reverseGeocode(coords.latitude, coords.longitude);
          const time = calculateDeliveryTime(address);

          setLocation({ area: address, deliveryTime: `${time} minutes` });
        } catch {
          setLocation({ area: "Unable to get address", deliveryTime: "20 minutes" });
        }
        setIsLoading(false);
      },
      (err) => {
        console.error("Geolocation error:", err);

        const errorMessages = {
          [err.PERMISSION_DENIED]: "Location permission denied",
          [err.POSITION_UNAVAILABLE]: "Location unavailable",
          [err.TIMEOUT]: "Location request timed out",
        };

        setError(errorMessages[err.code] || "Location access denied");
        setLocation({
          area: "Enable location for better service",
          deliveryTime: "25 minutes",
        });
        setIsLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Location Section */}
        <div className="location-section" onClick={fetchLocation}>
          <img
            src="https://res.cloudinary.com/depyc5ywg/image/upload/v1756141017/location-icon_jqlcee.png"
            alt="Location icon"
            className="location-icon"
          />
          <div className="location-text">
            <div className="delivery-time">
              {isLoading
                ? "Locating..."
                : error
                ? "⚠️ Location Error"
                : `Delivery in ${location.deliveryTime}`}
            </div>
            <div className="address">
              {isLoading
                ? "Getting your current location..."
                : error
                ? "Click to retry location access"
                : location.area}
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="logo">Flicksy</div>

        {/* Actions */}
        <div className="actions">
          <button className="action-button">
            <i className="bi bi-cart-fill"></i>
          </button>
          <button className="action-button">
            <i className="bi bi-person-circle"></i>
          </button>
        </div>
      </div>

      {/* Loading bar */}
      {isLoading && (
        <div className="loading-bar">
          <div className="loading-indicator"></div>
        </div>
      )}
    </header>
  );
};

export default Header;
