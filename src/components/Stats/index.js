import React, { useState, useEffect } from 'react';


function Stats() {
    console.log('Calling login endpoint with token');
    const [allValues, setAllvalues] = useState({
        totalVehicles: 12099,
    })

    const [eid, setEid] = useState('');
    // const token = '5560db8f4a2317dfb4690c5273a984098D637F85A0851AC11CC6D0450DC3A9CFB006FA40';
    const API = `https://vehicle-tracking-server-production.up.railway.app/getVehicles?sid=047215a9ac4a47141da0bf743eea0ea2&b=stable&v=1.51`

    // var payload = JSON.stringify({
    //     token: token
    // })

    const getVehicleData = async(url) => {
        try{
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: '*/*',
                },
                mode: 'no-cors'
                // body: JSON.stringify(payload)
            });
            const data = await res.json();
            console.log(data);
        }catch(err){
            console.log('some error happened');
            console.log(err);
        }
    }
    useEffect(()=>{
        alert('hello');
        getVehicleData(API)
    }, []);

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-ecommerce">
                <div className="container-fluid dashboard-content ">
                    <div className="ecommerce-widget">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-muted">Total Vehicles</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">$12099</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                            <span><i className="fa fa-fw fa-arrow-up"></i></span><span>5.86%</span>
                                        </div>
                                    </div>
                                    <div id="sparkline-revenue"></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-muted">Affiliate Revenue</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">$12099</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                            <span><i className="fa fa-fw fa-arrow-up"></i></span><span>5.86%</span>
                                        </div>
                                    </div>
                                    <div id="sparkline-revenue2"></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-muted">Refunds</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">0.00</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-primary font-weight-bold">
                                            <span>N/A</span>
                                        </div>
                                    </div>
                                    <div id="sparkline-revenue3"></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-muted">Avg. Revenue Per User</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">$28000</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                                            <span>-2.00%</span>
                                        </div>
                                    </div>
                                    <div id="sparkline-revenue4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;
