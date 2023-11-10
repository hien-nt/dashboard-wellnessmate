import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChartRevenue from "../revenue-chart/Chart";

export default function RevenueFeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$56.8</span>
          <span className="featuredMoneyRate">
            <AttachMoneyIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Wellness Mate Total Revenue</span>
      </div>
      
      <div className="featuredItem">
        <span className="featuredTitle">Monthly Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$56.8</span>
          <span className="featuredMoneyRate">
            + 0 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
