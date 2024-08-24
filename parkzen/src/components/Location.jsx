import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../assets/images.jpeg';

export default function UserCard() {
  const [isBookHovered, setIsBookHovered] = useState(false);
  const [isViewHovered, setIsViewHovered] = useState(false);
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={images}
                  className="card-img"
                  alt="User"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}

                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Pioneer Mill</h5>
                  <p className="card-text text-muted">Total Number of Slots:200</p>
                  <div className="d-flex justify-content-between my-2">
                    <div>
                      <h6 className="mb-0">Available</h6>
                      <p className="mb-0">34</p>
                    </div>
                    <div>
                      <h6 className="mb-0">Booked</h6>
                      <p className="mb-0">25</p>
                    </div>
                    <div>
                      <h6 className="mb-0">Status</h6>
                      <p className="mb-0">Busy</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-outline-secondary"  style={{
                    backgroundColor: '#00008B',
                    color: isBookHovered ? '#ff6347' : '#fff',
                    borderColor: '#00008B',
                    }}
                    onMouseEnter={() => setIsBookHovered(true)}
                    onMouseLeave={() => setIsBookHovered(false)}>
                      Book
                    </button>
                    <button type="button" className="btn btn-primary" style={{
          backgroundColor: '#00008B',
          color:  isViewHovered ? '#ff6347' :'#fff',
          borderColor:  '#00008B',
        }}
        onMouseEnter={() => setIsViewHovered(true)}
        onMouseLeave={() => setIsViewHovered(false)}>
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
