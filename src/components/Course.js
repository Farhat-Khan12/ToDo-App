import React from 'react';
import Forms from './Forms';
export default function Course() {
    return (
        <div className="container">
            <h1>Course</h1>
            <div className="col-sm-4">
                <p>JAVA</p>
                <button className="btn btn-primary">Enquire</button>
            </div><br/>
            <div className="col-sm-4">
                <p>PHP</p>
                <button className="btn btn-primary">Enquire</button>
            </div><br/>
            <div className="col-sm-4">
                <p>REACT JS</p>
                <button className="btn btn-primary">Enquire</button>
            </div><br/>
            <div className="col-sm-4">
                <p>NODE JS</p>
                <button className="btn btn-primary">Enquire</button>
            </div><br/>
            <div className="col-sm-4">
                <p>JAVASCRIPT</p>
                <button className="btn btn-primary">Enquire</button>
            </div><br/>
        </div>
    );
}
