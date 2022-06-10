import React from 'react';
import '../styles/Repositories.css';

function Repositories(props) {

  const { repos, search, setSearch } = props;

  if(repos === 0) {
    return;
  }

  return (
    <div className='repositories-container'>
      <div className='repositories-header'>
        <form>
          <div>
            <div>
              <input type="search" placeholder='Find a repository...' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
        </form>
      </div>
      <div>
        <ul>
          {repos?.map(repo => {
            return (
              <li>
                <div>
                  <div>
                    <h3><a href={repo.html_url}>{repo.name}</a></h3>
                  </div>
                  <div className='repo-info'>
                    updated on
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Repositories