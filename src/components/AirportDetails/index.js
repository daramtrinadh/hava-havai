import React, { useState } from "react";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import Services from "../Services";
import { useLocation } from "react-router-dom";
import { Divider } from "@adobe/react-spectrum";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";
import {
  Button,
  DialogTrigger,
  Dialog,
  Content,
  TextField,
  Flex,
  FileTrigger,
} from "@adobe/react-spectrum";
import "./index.css";

const AirportDetails = () => {
  const location = useLocation();
  const { airport } = location.state;
  const [terminals, setTerminals] = useState([
    {
      name: "Terminal 1",
      description: "Optional metadata should be two lines",
    },
  ]);

  const [newTerminal, setNewTerminal] = useState({ name: "", description: "" });

  const handleAddTerminal = () => {
    setTerminals([...terminals, newTerminal]);
    setNewTerminal({ name: "", description: "" });
  };

  return (
    <>
      <Navbar />
      <div className='main-home-sec'>
        <div className='sidebar-section'>
          <SideBar />
        </div>
        <div className='airport-details'>
          <Breadcrumbs>
            <Item>Airport</Item>
            <Item>{airport.name}</Item>
          </Breadcrumbs>

          <h1>{airport.name}</h1>
          <div className='airport-detail-info'>
            <p className='item'>Terminals</p>
            <p className='item'>Transport</p>
            <p className='item'>Contact details</p>
          </div>
          <Divider size='M' />

          <Flex direction='row' gap='size-200' wrap>
            {terminals.map((terminal, index) => (
              <div key={index} className='details-section'>
                <img
                  src='https://res.cloudinary.com/ds2bmmnmg/image/upload/v1720170088/Screenshot_2024-07-05_142832_xoei5n.png'
                  alt='terminal'
                  className='terminal-sample-image'
                />
                <div className='col'>
                  <div className='terminal-details'>
                    <p>{terminal.name}</p>
                    <svg
                      className='svg'
                      xmlns='http://www.w3.org/2000/svg'
                      height='18'
                      fill='white'
                      viewBox='0 0 18 18'
                      width='18'>
                      <title>S More 18 N</title>
                      <rect
                        id='Canvas'
                        fill='#ff13dc'
                        opacity='0'
                        width='18'
                        height='18'
                      />
                      <circle className='fill' cx='8.9' cy='9.1' r='1.7' />
                      <circle className='fill' cx='14.75' cy='9.1' r='1.7' />
                      <circle className='fill' cx='3.05' cy='9.1' r='1.7' />
                    </svg>
                  </div>
                  <p className='terminal-para'>{terminal.description}</p>
                </div>
              </div>
            ))}
          </Flex>

          <DialogTrigger>
            <Button variant='cta'>+ Add Terminal</Button>
            {(close) => (
              <Dialog>
                <Content>
                  <Flex direction='column' gap='size-200'>
                    <TextField
                      label='Terminal Name'
                      placeholder='Terminal Title'
                      value={newTerminal.name}
                      onChange={(name) =>
                        setNewTerminal({ ...newTerminal, name })
                      }
                    />
                    <Divider size='S' />
                    <TextField
                      label='Description'
                      value={newTerminal.description}
                      onChange={(description) =>
                        setNewTerminal({ ...newTerminal, description })
                      }
                    />

                    <Flex
                      direction='row'
                      gap='size-200'
                      alignItems='center'
                      margin-top={40}>
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
                                className='fill'
                                d='M16.5,5h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H15v8H3V7H4.5A.5.5,0,0,0,5,6.5v-1A.5.5,0,0,0,4.5,5h-3a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,16.5,5Z'
                              />
                              <path
                                className='fill'
                                d='M5.4,4H8V9.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2.6a.4.4,0,0,0,.4-.4.39352.39352,0,0,0-.1-.2635L9.1755.072a.25.25,0,0,0-.35,0L5.1,3.334A.39353.39353,0,0,0,5,3.6.4.4,0,0,0,5.4,4Z'
                              />
                            </svg>
                          </span>
                          Upload image
                        </Button>
                      </FileTrigger>
                    </Flex>
                    <Flex
                      direction='row'
                      gap='size-200'
                      justifyContent='flex-end'>
                      <Button variant='secondary' onPress={close}>
                        Cancel
                      </Button>
                      <Button
                        variant='cta'
                        onPress={() => {
                          handleAddTerminal();
                          close();
                        }}>
                        Continue
                      </Button>
                    </Flex>
                  </Flex>
                </Content>
              </Dialog>
            )}
          </DialogTrigger>
          <Services />
        </div>
      </div>
    </>
  );
};

export default AirportDetails;
