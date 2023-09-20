import "./content.css";
import Chart from "./chart";
import Table from "./table";

const Contents = () => {
  return (
    <main>
      <div className="container">
        <div className="item-1">
          <h3>Today</h3>
          <Chart />
        </div>
        <div className="item-2">
          <h3>Recent Deposits</h3>
          <div id="deposit">
          <h1>$3,024.00</h1>
          <p>on 15 March, 2019</p>

          <a href="/seemore" id="view-balance">View Balance</a>
          </div>
        </div>

        <div className="item-3">
        <h3 >Recent Orders</h3>
            <Table/>
        </div>

      </div>
    </main>
  );
};

export default Contents;
