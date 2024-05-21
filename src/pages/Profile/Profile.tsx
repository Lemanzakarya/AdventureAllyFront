import { useState } from 'react';
import './Profile.css';
import profilePicture from '../../assets/images/profile.jpg';
import EditProfile from './EditProfile';

const Profile = () => {
    const [user, setUser] = useState({
        userId: 1, // Assuming a static user ID for now
        name: 'Bill Gates',
        email: 'billgatesmicrosoft@gmail.com',
        phoneNumber: '+90 (123) 456 78 91',
        age: 58,
        profilePicture: profilePicture,
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSave = (updatedUser: any) => {
        setUser(updatedUser);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    if (isEditing) {
        return <EditProfile user={user} onSave={handleSave} onCancel={handleCancel} />;
    }

    return (
        <div className="profile-card ">
            <div className="profile-picture">
                <img src={user.profilePicture} alt="Profile" />
            </div>
            <div className="profile-info">
                <h1>{user.name}</h1>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                <p><strong>Age:</strong> {user.age}</p>
            </div>
            <div className="edit-icon">
                <button onClick={handleEditClick}>Edit</button>
            </div>
        </div>
    );
};

export default Profile;
