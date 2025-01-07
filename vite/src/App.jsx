import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import Get from './Components/Get';
import Post from './Components/Post';
import Update from './Components/Update';
import Delete from './Components/Delete';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Router>
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/get" className="text-blue-500 hover:text-blue-700">Get</Link>
            </li>
            <li>
              <Link to="/post" className="text-blue-500 hover:text-blue-700">Post</Link>
            </li>
            <li>
              <Link to="/update" className="text-blue-500 hover:text-blue-700">Update</Link>
            </li>
            <li>
              <Link to="/delete" className="text-blue-500 hover:text-blue-700">Delete</Link>
            </li>
          </ul>
        </nav>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Routes>
            <Route path="/get" element={<Get />} />
            <Route path="/post" element={<Post />} />
            <Route path="/update" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;