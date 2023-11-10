import "../revenue-featuredInfo/featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function UserFeaturedInfo() {
  return (
    <div className="featured">
      {/* <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div> */}

      <div className="featuredItem">
        <span className="featuredTitle">Total User</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">32</span>
          <span className="featuredMoneyRate">
            <PeopleAltIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Wellness Mate Total User</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Monthly New User</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">32</span>
          <span className="featuredMoneyRate">
            - 0<ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
