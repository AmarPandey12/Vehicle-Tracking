import React, { useState, useEffect } from 'react';


function Stats() {
    
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
