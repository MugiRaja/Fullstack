import axios from 'axios';
import { React, useState } from 'react';

const Post = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState();
  const [photo, setPhoto] = useState();
  const [email, setemail] = useState('');
  const sendDataToBackend = {
    id: id,
    name: name,
    email:email,
    avatar: avatar,
    photo: photo,
  };
  const serverURL = 'https://6766643a410f84999657895b.mockapi.io/hello';
  const handelPost = async (e) => {
    e.preventDefault();
    await axios
      .post(serverURL, sendDataToBackend)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <form action="">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ID
          </label>
          <input
            type="number"
            onChange={(e) => setId(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            NAME
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            EMAIL
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            AVATAR
          </label>
          <input
            type="file"
            onChange={(e) => setAvatar(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            PHOTO
          </label>
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handelPost}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Post;
