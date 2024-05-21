import React, { useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const EditProfile = ({ user, onSave, onCancel, onResetPassword }: any) => {
    const [formData, setFormData] = useState(user);
    const [profilePicture, setProfilePicture] = useState(user.profilePicture);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (upload: any) => {
                setProfilePicture(upload.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedUser = {
            ...formData,
            profilePicture,
        };
        onSave(updatedUser);
    };

    return (
        <form className="edit-profile-card" onSubmit={handleSubmit}>
            <div className="profile-picture">
                <img src={profilePicture || user.profilePicture} alt="Profile" />
                <input type="file" onChange={handleProfilePictureChange} />
                <div className="edit-actions">
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </div>
            <div className="profile-info">
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    Phone Number:
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </label>
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age} onChange={handleChange} />
                </label>
                <div className="reset-password">
                    <Link to="#" onClick={onResetPassword}>Reset Password</Link>
                </div>
            </div>
        </form>
    );
};

export default EditProfile;
