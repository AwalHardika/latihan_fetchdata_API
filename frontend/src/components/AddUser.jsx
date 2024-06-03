import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ onCancel, onUserAdd }) => {
    const [userData, setUserData] = useState({
        nama: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Mengirimkan data dari state userData ke endpoint
         const response = await axios.post("http://localhost:8000/api/regis", userData);
         onUserAdd(response.data)
         alert("data berhasil ditambah")
         onCancel();
            
        } catch (error) {
            alert("data gagal ditambah")
        }
    };

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <div className='fixed w-full h-full z-10 flex justify-center bg-black items-center bg-opacity-50'>
            <form onSubmit={handleSubmit} id='formData' className='w-[500px] bg-white rouded-lg px-4 py-4 rounded-lg'>
                <h1 className='text-center pb-8'>Form Add User</h1>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="nama">Nama</label>
                    <input type="text" id='nama' name="nama" onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name="email" onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name="password" onChange={handleChange} />
                </div>

                <div className='flex gap-4'>
                    <button onClick={handleCancel}>Cancel</button>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddUser;
