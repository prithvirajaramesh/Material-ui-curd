import React, { useState } from 'react'
import './App.css';
import MaterialTable from 'material-table'
function App() {

  const namelist = [
    { id: 1, name: "prithviraja", email: "prithvi@gmail.com", phone: 12345678, city: "thiruvaaru" },
    { id: 2, name: "hello", email: "hello@gmail.com", phone: 9999999999, city: "tokyo" },
    { id: 3, name: "jack", email: "sparrow@gmail.com", phone: 7777777777, city: "texas" },
    { id: 4, name: "musk", email: "musk@gmail.com", phone: 888888888, city: "marse" },
  ]
  const [data, setData] = useState(namelist)
  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Ph number", field: "phone" },
    { title: "City", field: "city" },
  ]
  return (
    <div className="App">
      <MaterialTable
        title="Name list"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: newRow => new Promise((resolve, reject) => {
            const updatedRow = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRow)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedData = [...data];
            updatedData.splice(index, 1)
            setTimeout(() => {
              setData(updatedData)
              resolve()
            }, 2000)
          }),
          onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
            const index = oldData.tableData.id;
            const updatedData = [...data];
            updatedData[index] = newData
            setTimeout(() => {
              setData(updatedData)
              resolve()
            }, 2000)
          })
        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: 'first'
        }}
      />
    </div>
  );
}

export default App;
