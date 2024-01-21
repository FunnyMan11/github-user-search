// App.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Profile from "./Profile";
import Search from "./Search";  // Import the Search component
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState('funnyman11');

  const handleSearch = (searchTerm) => {
    setUsers(searchTerm);
  };

  useEffect(() => {
    axios.get(`https://api.github.com/users/${users}/repos?page=1&per_page=9&sort=updated`)
      .then((res) => {
        setItems(res.data);
      })
      .catch(err => console.log(err));
  }, [users]);

  return (
    <>
      <div className="bg-emerald-500 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">GitHub Profile Viewer</h1>
          <Search onSearch={handleSearch} />
        </div>
      </div>

      {!items ? (
        <Loading />
      ) : (
        <section className="container mx-auto pt-10 pb-20">
          <h1 className="text-2xl font-bold">Viewing {users}'s repositories;</h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Profile key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default App;




// const singleUser = `https://api.github.com/users/funnyman11`
// const repos = `https://api.github.com/users/funnyman11/repos?per_page=5`
// https://api.github.com/users/funnyman11/repos?page=1&per_page=10&sort=updated
