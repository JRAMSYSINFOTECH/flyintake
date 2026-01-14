import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Not logged in");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/auth/profile", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (res.ok) {
          const data = await res.json();
          const initialData = {
            name: data.user.name,
            image: data.user.image || "/assets/Profile.jpg",
            email: data.user.email,
            phone: data.user.phone || "",
            address: {
              line1: "",
              line2: "",
            },
            gender: "",
            dob: "",
          };
          setUserData(initialData);
          setFormData(initialData);
        } else {
          setError("Failed to load profile");
        }
      } catch (err) {
        setError("Cannot connect to server");
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userData) return <div>No user data</div>;

  const handleEditClick = () => {
    if (window.confirm("Are you sure you want to edit your profile?")) {
      setIsEditing(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "line1" || name === "line2") {
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be under 5MB");
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Invalid image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Not logged in");
      return;
    }

    try {
      const res = await fetch("/api/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          image: formData.image
        })
      });

      if (res.ok) {
        const data = await res.json();
        setUserData(formData);
        setIsEditing(false);
        // Update localStorage with new user data
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile");
      }
    } catch (err) {
      alert("Cannot connect to server");
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Header */}
        <div className="profile-header">
          <div className="profile-image-wrapper">
            <img
              src={isEditing ? formData.image : userData.image}
              alt="Profile"
              className="profile-image"
            />

            {isEditing && (
              <label className="image-edit-btn">
                ✎
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          {isEditing ? (
            <>
              <input
                className="input center"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                className="input center"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </>
          ) : (
            <>
              <h2 className="profile-name">{userData.name}</h2>
              <p className="profile-email">{userData.email}</p>
            </>
          )}
        </div>

        {/* Details */}
        <div className="profile-details">
          <div className="detail-row">
            <span className="detail-label">Phone:</span>
            {isEditing ? (
              <input
                className="input right"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userData.phone}</span>
            )}
          </div>

          <div className="detail-row">
            <span className="detail-label">Gender:</span>
            {isEditing ? (
              <select
                className="select"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            ) : (
              <span>{userData.gender}</span>
            )}
          </div>

          <div className="detail-row">
            <span className="detail-label">DOB:</span>
            {isEditing ? (
              <input
                type="date"
                className="input right"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
            ) : (
              <span>{new Date(userData.dob).toLocaleDateString()}</span>
            )}
          </div>

          <div>
            <p className="detail-label">Address:</p>
            {isEditing ? (
              <>
                <input
                  className="input"
                  name="line1"
                  value={formData.address.line1}
                  onChange={handleInputChange}
                />
                <input
                  className="input"
                  name="line2"
                  value={formData.address.line2}
                  onChange={handleInputChange}
                />
              </>
            ) : (
              <>
                <p className="address-text">{userData.address.line1}</p>
                <p className="address-text">{userData.address.line2}</p>
              </>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="profile-actions">
          {isEditing ? (
            <button className="btn btn-save" onClick={handleSave}>
              Save Changes
            </button>
          ) : (
            <button className="btn btn-edit" onClick={handleEditClick}>
              Edit Profile
            </button>
          )}
          <button
            className="btn btn-logout"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              window.dispatchEvent(new Event('userLogout'));
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
