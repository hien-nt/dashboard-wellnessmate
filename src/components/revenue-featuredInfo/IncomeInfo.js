import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function IncomeFeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Income</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$56.8</span>
          <span className="featuredMoneyRate">
            <AttachMoneyIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Wellness Mate Total Income</span>
      </div>
      
      <div className="featuredItem">
        <span className="featuredTitle">Monthly Income</span>
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
