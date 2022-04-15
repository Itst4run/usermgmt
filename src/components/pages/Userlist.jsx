import React,{useState} from 'react';
import "./UserList.css";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { userRows } from '../test';
export default function Userlist() {
 const [data,setData]=useState(userRows)

 const handleDelete=(id)=>{
   setData(data.filter((item)=>item.id !==id));
 }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'Email', headerName: 'Email-id', width: 160 },
    // { field: 'Action', headerName: 'Action', width: 160 },

    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },{

      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params)=>{
        return(
          <>
          <Link to ={"user"+params.row.id}>
          <button className='userListedit'>EDIT</button>
          </Link>

          <div className='deletebtn' onClick={()=>handleDelete(params.row.id)}><img src="https://img.icons8.com/fluency-systems-regular/25/000000/filled-trash.png"/></div>
          </>
        )
      }
    }
  ];
  
  return (
    <div className="userlist">
    <DataGrid
      rows={data}
      disableSelectionOnClick
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  )
}
