import { Divider } from "@adobe/react-spectrum";
import { TextField } from "@adobe/react-spectrum";
import { Picker, Item } from "@adobe/react-spectrum";
import { FileTrigger, Button } from "@adobe/react-spectrum";
import { Switch } from "@adobe/react-spectrum";

import "./index.css";
const Services = () => (
  <div className='services-section'>
    <h1>Services</h1>
    <p>Lost & found </p>
    <Divider size='M' />
    <div className='services'>
      <div className='services-text'>
        <TextField label='Service Name' value='Lost&found' />
      </div>
      <div className='picker'>
        <Picker label='Categary'>
          <Item key='rarely'>Rarely</Item>
          <Item key='sometimes'>Sometimes</Item>
          <Item key='always'>Always</Item>
        </Picker>
      </div>
      <div className='picker'>
        <Picker label='Sub Categary'>
          <Item key='rarely'>Rarely</Item>
          <Item key='sometimes'>Sometimes</Item>
          <Item key='always'>Always</Item>
        </Picker>
      </div>
      <div className='upload-btn'>
        <FileTrigger allowsMultiple>
          <Button variant='primary'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='18'
                viewBox='0 0 18 18'
                fill='white'
                width='18'>
                <title>S Share 18 N</title>
                <rect
                  id='Canvas'
                  fill='#ff13dc'
                  opacity='0'
                  width='18'
                  height='18'
                />
                <path
                  class='fill'
                  d='M16.5,5h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H15v8H3V7H4.5A.5.5,0,0,0,5,6.5v-1A.5.5,0,0,0,4.5,5h-3a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,16.5,5Z'
                />
                <path
                  class='fill'
                  d='M5.4,4H8V9.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2.6a.4.4,0,0,0,.4-.4.39352.39352,0,0,0-.1-.2635L9.1755.072a.25.25,0,0,0-.35,0L5.1,3.334A.39353.39353,0,0,0,5,3.6.4.4,0,0,0,5.4,4Z'
                />
              </svg>
            </span>
            Upload image
          </Button>
        </FileTrigger>
      </div>
      <div className='switch'>
        <Switch>Show Image</Switch>
      </div>
    </div>
    <div className='services-text'>
      <TextField label='Description' value='type here' />
    </div>
    <p>Lounge</p>
    <Divider size='M' />
    <p>Money Exchange</p>
    <Divider size='M' />
  </div>
);
export default Services;
