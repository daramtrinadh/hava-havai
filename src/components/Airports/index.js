import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  TableView,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
} from "@adobe/react-spectrum";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import { Link } from "react-router-dom";
import "./index.css";

const Airports = () => {
  const columns = [
    { name: "All Airports ", uid: "name" },
    { name: "Country", uid: "country" },
    { name: "Code", uid: "code" },
    { name: "Terminals", uid: "terminals" },
    { name: "Actions", uid: "actions" },
  ];

  const initialRows = [
    {
      id: uuid(),
      name: "Indra Gandhi International Airport",
      country: "India",
      code: "DEL",
      terminals: "3",
    },
    {
      id: uuid(),
      name: "Dubai International Airport",
      country: "UAE",
      code: "DXB",
      terminals: "5",
    },
    {
      id: uuid(),
      name: "Heathrow Airport",
      country: "England",
      code: "LHR",
      terminals: "6",
    },
    {
      id: uuid(),
      name: "Istanbul Airport",
      country: "Turkey",
      code: "IST",
      terminals: "3",
    },
    {
      id: uuid(),
      name: "Rajiv Gandhi International Airport",
      country: "Texas",
      code: "DFW",
      terminals: "14",
    },
  ];

  const [rows, setRows] = useState(initialRows);
  const [selectedKeys, setSelectedKeys] = useState(new Set());

  const handleDeleteClick = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  return (
    <>
      <Navbar />
      <div className='airport-section'>
        <div className='sidebar-section'>
          <SideBar />
        </div>
        <div className='airports-info'>
          <div className='head-section'>
            <div>
              <h1>Airports</h1>
            </div>
            <div>
              <button type='button' className='add-item'>
                + Add new
              </button>
            </div>
          </div>
          <TableView
            aria-label='Table with controlled selection'
            selectionMode='multiple'
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}>
            <TableHeader columns={columns}>
              {(column) => (
                <Column
                  key={column.uid}
                  align={column.uid === "terminals" ? "end" : "start"}>
                  {column.name}
                </Column>
              )}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <Row key={item.id}>
                  {(columnKey) =>
                    columnKey === "actions" ? (
                      <Cell>
                        <button type='button' className='edit-btn'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            height='18'
                            viewBox='0 0 18 18'
                            fill='white'
                            width='18'>
                            <title>Edit</title>
                            <rect
                              fill='#ff13dc'
                              opacity='0'
                              width='18'
                              height='18'
                            />
                            <path
                              className='fill'
                              d='M16.7835,4.1,13.9,1.216a.60751.60751,0,0,0-.433-.1765H13.45a.6855.6855,0,0,0-.4635.203L2.542,11.686a.49494.49494,0,0,0-.1255.211L1.0275,16.55c-.057.1885.2295.4255.3915.4255a.12544.12544,0,0,0,.031-.0035c.138-.0315,3.933-1.172,4.6555-1.389a.486.486,0,0,0,.207-.1245L16.7565,5.014a.686.686,0,0,0,.2-.4415A.61049.61049,0,0,0,16.7835,4.1ZM5.7,14.658c-1.0805.3245-2.431.7325-3.3645,1.011L3.34,12.304Z'
                            />
                          </svg>
                        </button>
                        <button
                          type='button'
                          className='delete-btn'
                          onClick={() => handleDeleteClick(item.id)}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            height='18'
                            fill='white'
                            viewBox='0 0 18 18'
                            width='18'>
                            <title>Delete</title>
                            <rect
                              fill='#ff13dc'
                              opacity='0'
                              width='18'
                              height='18'
                            />
                            <path
                              className='fill'
                              d='M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z'
                            />
                          </svg>
                        </button>
                      </Cell>
                    ) : (
                      <Cell>
                        {columnKey === "name" ? (
                          <Link
                            to={`/airport/${item.id}`}
                            state={{ airport: item }}>
                            {item[columnKey]}
                          </Link>
                        ) : (
                          item[columnKey]
                        )}
                      </Cell>
                    )
                  }
                </Row>
              )}
            </TableBody>
          </TableView>
        </div>
      </div>
    </>
  );
};

export default Airports;
