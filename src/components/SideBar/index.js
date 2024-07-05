import './index.css'
import {Link} from 'react-router-dom'

const SideBar = () => (
  <div className='sidebar-inner-section'>
    <>
      <Link className='link'>
        <div className='home-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='white'
            height='18'
            viewBox='0 0 18 18'
            width='18'>
            <title>S Home 18 N</title>
            <rect
              id='Canvas'
              fill='#ff13dc'
              opacity='0'
              width='18'
              height='18'
            />
            <path
              className='fill'
              d='M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z'
            />
          </svg>
          <p className='text'>Home</p>
        </div>
      </Link>
      <Link className='link'>
        <div className='home-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='18'
            fill='white'
            viewBox='0 0 18 18'
            width='18'>
            <title>S Apps 18 N</title>
            <rect
              id='Canvas'
              fill='#ff13dc'
              opacity='0'
              width='18'
              height='18'
            />
            <rect className='fill' height='3' rx='0.5' width='3' x='1' y='1' />
            <rect className='fill' height='3' rx='0.5' width='3' x='7' y='1' />
            <rect className='fill' height='3' rx='0.5' width='3' x='13' y='1' />
            <rect className='fill' height='3' rx='0.5' width='3' x='1' y='7' />
            <rect className='fill' height='3' rx='0.5' width='3' x='7' y='7' />
            <rect className='fill' height='3' rx='0.5' width='3' x='13' y='7' />
            <rect className='fill' height='3' rx='0.5' width='3' x='1' y='13' />
            <rect className='fill' height='3' rx='0.5' width='3' x='7' y='13' />
            <rect
              className='fill'
              height='3'
              rx='0.5'
              width='3'
              x='13'
              y='13'
            />
          </svg>
          <p className='text'>Dashboard</p>
        </div>
      </Link>
      <p>
        <strong>Services</strong>
      </p>
      <Link to='/airports' className='link-airport'>
        Airports
      </Link>
      <Link className='link-videos'>Videos</Link>
      <p>
        <strong>Others</strong>
      </p>
      <p>List1</p>
      <p>List2</p>
      <p>List3</p>
    </>
  </div>
);
export default SideBar