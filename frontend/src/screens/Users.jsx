import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddUser from '../components/AddUser'


const Users = () => {

  const [dataUser, setDataUser] = useState([])
  const [showModal, setShowModal] = useState(false)
  function handleShowModal(){
    setShowModal(prev => prev=!prev)
  }

  function handleAfterSubmit(newUser){
    setDataUser(prevUsers => [...prevUsers, newUser]);
    setShowModal(false)
    
  }

  async function getDataUser (){
    try {
      const dataUser = await axios.get("http://localhost:8000/api/regis")
      setDataUser(dataUser.data.query)
      
    } catch (error) {
      console.log("error menangkap data")
      
    }
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Apakah yakin data dihapus?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8000/api/delete/${id}`);
        getDataUser();
        alert("Data berhasil dihapus  ")
        
      } catch (error) {
        console.log("Error deleting data:", error.message);
        alert("Data gagal dihapus");
      }
    }
  }

  useEffect(()=>{
    getDataUser()
  }, [])


  return (
  <section className='w-full h-screen'>
  {
    showModal? (<AddUser onCancel={handleShowModal} onUserAdd={getDataUser}/>) : null
  }
  <div className='flex flex-col pt-24 px-8'>
    {/* header content */}
    <div className='flex h-10 bg-white'>
      <button onClick={handleShowModal}>Add user</button>
    </div>
    {/* content */}
    <div className="overflow-x-auto">
  <table className="table table-lg">
    {/* head */}
    <thead>
      <tr>
        <th colSpan={2}>Nama</th>
        <th>Email</th>
        <th>Update at</th>
        <th>Created at</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {dataUser.map((e)=>(
       <tr key={e.id} className='even:bg-gray-200'>
        <td className='p-0'>
         <input type="checkbox" />
        </td>
       <td>
         {e.nama}
       </td>
       <td>{e.email}</td>
       <td>{e.updated_at}</td>
       <td>{e.created_at}</td>
       <td>
         <div className='flex gap-4'>
           <a href="" className='px-2 py-2 bg-blue-400'>Detail</a>
           <button href="" className='px-2 py-2 bg-red-400' onClick={()=>handleDelete(e.id)}>Hapus</button>
           <a href="" className='px-2 py-2 bg-green-400'>Edit</a>

         </div>
       </td>

     </tr>
     ))}
      {/* row 2 */}
  
    </tbody>
  </table>
</div>

</div>
    
  
</section>

  )
}

export default Users