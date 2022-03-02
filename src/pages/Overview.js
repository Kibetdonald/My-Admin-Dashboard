import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart } from "react-google-charts";

const Overview = () => {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];

  const options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Africa Tech Summit</h3>
              <ul className="breadcrumb">
                <i className="fa fa-tachometer" />

                <li className="breadcrumb-item active">Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="orderDiv">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-warning">
                  <i className="fa fa-book"></i>
                </span>
                <div className="dash-count">
                  <h3>26</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Registered Delegates</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-warning w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="stockDiv">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-warning">
                  <i className="fa fa-credit-card"></i>
                </span>
                <div className="dash-count">
                  <h3>3</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Inivited Speakers</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-warning w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="transactionDiv">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-warning">
                  <i className="fa fa-barcode"></i>
                </span>
                <div className="dash-count">
                  <h3>13</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Invited Sponsors</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-warning w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="salesDiv">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-warning">
                  <i className="fa fa-folder"></i>
                </span>
                <div className="dash-count">
                  <h3>7</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Invited Exhibitors</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-warning w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 d-flex">
          <div className="card card-table flex-fill">
            <div className="card-header">
              <h4 className="card-title">Event Analytics</h4>
            </div>
            <div className="card-body">
              <Chart
                chartType="AreaChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div className="card  card-table flex-fill">
            <div className="card-header">
              <h4 className="card-title">Event Turnout</h4>
            </div>
            <div className="card-body">
              <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
