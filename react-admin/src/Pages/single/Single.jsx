import "./single.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Chart from "../../component/chart/Chart";
import List from "../../component/table/Table";
import Chart2 from "../../component/chart/Chart2";
import Chart3 from "../../component/chart/Chart3";
import Datatable from "../../component/datatable/Datatable";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://media.licdn.com/dms/image/D4E03AQEJ0R777k9voA/profile-displayphoto-shrink_800_800/0/1668978799897?e=1677110400&v=beta&t=sYRUqpyFHddk-28wwP9O_LWoO5x1SmMfkmek9faOMHo"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">TAMLALTI Maryam</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">mtamlalti@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+21223456789</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    HAY AL ANDALOUSS OUJDA
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Morocco</span>
                </div>

                </div>
            </div>
              </div>
             
            </div>
            <div className="bottom">
        <h1 className="title">bottom</h1>
         
        <Chart3/>
        </div>
        
      </div>
    </div>
  );
};

export default Single;