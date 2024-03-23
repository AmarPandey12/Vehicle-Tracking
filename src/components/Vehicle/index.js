import React, { useState, useEffect } from 'react';

function VehicleDetail() {

    const [allValues, setAllvalues] = useState({})
    const str = window.location.search.substring(1);
    console.log('>>> ', str);
    
    const API = `https://vehicle-tracking-server-production.up.railway.app/getVehicles?${str}&b=stable&v=1.51`

    // var payload = JSON.stringify({
    //     token: token
    // })

    const getVehicleData = async (url) => {
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: '*/*',
                },
                // body: JSON.stringify(payload)
            });
            const data = await res.json();
            console.log(data);
            setAllvalues(data);
        } catch (err) {
            console.log('some error happened');
            console.log(err);
        }
    }
    useEffect(() => {
        getVehicleData(API)
    }, []);

    // console.log(allValues);
    return (
        <div class="dashboard-wrapper">
            <div class="dashboard-ecommerce">
                <div class="container-fluid dashboard-content ">
                    <div class="ecommerce-widget">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Active Vehicles</h5>
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className="bg-light">
                                                    <tr className="border-0">
                                                        <th className="border-0">Vehicle Name</th>
                                                        <th className="border-0">Engine Status</th>
                                                        <th className="border-0">Fuel Temparature</th>
                                                        <th className="border-0">Fuel Volume Total</th>
                                                        <th className="border-0">Power Supply Status</th>
                                                        <th className="border-0">Power Supply Voltage</th>
                                                        <th className="border-0">Location</th>
                                                        <th className="border-0">Updated At</th>
                                                        <th className="border-0">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {allValues.length > 0 &&
                                                        allValues.map((element) => {
                                                            console.log(element);
                                                            return (
                                                                <tr>
                                                                    <td>{element.vehicle}</td>
                                                                    <td>{element.sensor_data[0].value}</td>
                                                                    <td>{element.sensor_data[1].value}</td>
                                                                    <td>{element.sensor_data[2].value}</td>
                                                                    <td>{element.sensor_data[3].value}</td>
                                                                    <td>{element.sensor_data[4].value}</td>
                                                                    <td>{element.last_location_lat}, {element.last_location_long}</td>
                                                                    <td>{element.Time} </td>
                                                                    <td><span className="badge-dot badge-brand mr-1"></span>{(element.sensor_data[0].value) ? 'In Transit' : 'Stopped'} </td>
                                                                </tr>
                                                            );
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleDetail;