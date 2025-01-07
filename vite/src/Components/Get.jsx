import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios';

const Get = () => {
  const [datas, setDatas] = useState([]);
  const Navigate = useNavigate();
  const handleUpdate = (data) => {
    Navigate('/update', { state: data });
  };

  const getData = async () => {
    const URL = 'https://6766643a410f84999657895b.mockapi.io/hello';
    await axios
      .get(URL)
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async (data) => {
    console.log(data);

    const URL = `https://6766643a410f84999657895b.mockapi.io/hello/${data.id}`;
    await axios
      .delete(URL)
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, [datas]);
  return (
    <div className="p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Id</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Avatar</th>
            <th className="py-3 px-6 text-left">Photo</th>
            <th className="py-3 px-6 text-left">Edit</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {Array.isArray( ) &&
            datas.map((data) => (
              <tr
                key={data.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{data.id}</td>
                <td className="py-3 px-6 text-left">{data.name}</td>
                <td className="py-3 px-6 text-left">{data.email}</td>
                <td className="py-3 px-6 text-left">
                  <img
                    src={data.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="py-3 px-6 text-left">
                  <img
                    src={data.photo}
                    alt="photo"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="py-3 px-6 text-left">
                  <button onClick={() => handleUpdate(data)}>Update</button>
                </td>
                <td className="py-3 px-6 text-left">
                  <button onClick={() => handleDelete(data)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Get;
