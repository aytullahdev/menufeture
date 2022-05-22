import React from 'react';

const Profile = () => {
    return (
        <div className='text-black grid grid-col-1 lg:grid-cols-3 p-4'>
            <div className='flex justify-center'>
                <img className='w-32 h-32' src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png' alt="" />
            </div>
            <div>
                <h1 className='text-center text-4xl uppercase'>User Information</h1>
                <div className='text-left py-5 px-2'>
                    <h3>User:</h3><p></p>
                </div>
            </div>
        </div>
    );
};

export default Profile;