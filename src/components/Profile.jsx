import React from 'react'
import '../styles/Profile.css'

function Profile(props) {

  if(!props.data) {
    return <div>Loading...</div>
  }

  const { name, login, bio, avatar_url,
     followers, following, location, twitter_username,
    } = props.data;

  return (
    <div className='profile-container'>

      <div className='profile-avatar-box'>

        <div className='avatar-box'>
          <a href='' className='avatar-link'><img src={avatar_url} alt="avatar" /></a>
        </div>

        <div className='userName-box'>
          <h1>
            <span className='fullname'>{name}</span>
            <span className='username'>{login}</span>
          </h1>
        </div>

      </div>
      
      <div className='profile-info-box'>

        <div className='bio-box'>
          <div className='bio'>{bio}</div>
        </div>

        <div className='follow-box'>
          <div className='user-follow-box'>
            <a className='user-follow-link'>
              <svg viewBox='0 0 16 16' height='16' width='16'>
                <path fillRule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
              </svg>
              <span>{followers}</span>
              followers
            </a>
            
            <a className='user-follow-link'>
              <span>{following}</span>
              following
            </a>
          </div>
        </div>

        <ul className='details-box'>
          <li className='details-item'>
            <svg viewBox='0 0 16 16' width='16' height='16'>
              <path fillRule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
            <span>{location}</span>
          </li>
          <li className='details-item'>
            <svg viewBox='0 0 273.5 222.3' width='16' height='16'>
              <path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="currentColor"></path>
            </svg>
            <span>@{twitter_username}</span>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Profile