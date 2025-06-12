import { useState } from "react";
import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
        <img
          src={profile.image}
          alt='Profile'
          className='rounded-full w-20 h-20 object-cover mr-4'
        />

        <div className='mt-4 sm:mt-0'>
          {isEditing ? (
            <>
              <input
                type='text'
                name='name'
                value={profile.name}
                onChange={handleChange}
                className='bg-gray-800 text-white p-2 rounded mb-2 w-full sm:w-auto'
              />
              <input
                type='email'
                name='email'
                value={profile.email}
                onChange={handleChange}
                className='bg-gray-800 text-white p-2 rounded w-full sm:w-auto'
              />
              <input
                type='text'
                name='image'
                value={profile.image}
                onChange={handleChange}
                className='bg-gray-800 text-white p-2 rounded mt-2 w-full sm:w-auto'
              />
            </>
          ) : (
            <>
              <h3 className='text-lg font-semibold text-gray-100'>{profile.name}</h3>
              <p className='text-gray-400'>{profile.email}</p>
            </>
          )}
        </div>
      </div>

      <button
        onClick={handleToggleEdit}
        className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'
      >
        {isEditing ? "Save Changes" : "Edit Profile"}
      </button>
    </SettingSection>
  );
};

export default Profile;
