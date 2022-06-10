import { useState, useEffect } from 'react'
import Header from './components/Header';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [data, setData] = useState(null);
  const [repos, setRepos] = useState(null);
  const [search, setSearch] = useState('');

  const GithubData = async () => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    setData(data);
    console.log(data)
    await GithubRepo();
  }

  const GithubRepo = async () => {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await response.json();
    setRepos(null);
    setRepos(data);
    console.log(data)
  }

  const SearchRepo = async () => {
    const response = await fetch(`https://api.github.com/repos/${user}/${search}`);
    const data = await response.json();

    if(data.id) {
      setRepos(null);
      setRepos([data]);
    }
  }

  useEffect(() => {
    if(search) {
      SearchRepo();
    }
    if(search === '') {
      GithubRepo();
    }
  }, [search]);
  
  return (
    <div className="App" >
      <Header user={user} setUser={setUser} GithubData={GithubData} />
      {data && <main>
        <section className='header-container'>
          <nav>
            <a>
              Repositories
            </a>
          </nav>
        </section>
        <section className='content-container'>
          <Profile data={data} />
          <Repositories search={search} setSearch={setSearch} repos={repos} />
        </section>
      </main>}
    </div>
  )
}

export default App
