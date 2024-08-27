import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Locationoption } from './Locationcard'; // Adjust the path as needed
import HoverableButton from './button';

export default function UserCard() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8"> {/* Adjust this column width to center align */}
          {Locationoption.map((user, index) => (
            <div className="card mb-4" key={index}> {/* Add margin-bottom to cards */}
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={user.image}
                    className="card-img"
                    alt={user.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{user.title}</h5>
                    <p className="card-text text-muted">Total Number of Slots: {user.slots}</p>
                    <div className="d-flex justify-content-between my-2">
                      <div>
                        <h6 className="mb-0">Available</h6>
                        <p className="mb-0">{user.available}</p>
                      </div>
                      <div>
                        <h6 className="mb-0">Booked</h6>
                        <p className="mb-0">{user.booked}</p>
                      </div>
                      <div>
                        <h6 className="mb-0">Status</h6>
                        <p className="mb-0">{user.status}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <HoverableButton buttonText="Book" />
                      <HoverableButton buttonText="View" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


