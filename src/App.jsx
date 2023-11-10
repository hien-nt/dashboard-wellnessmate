import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";
import FeaturedInfo from "./components/revenue-featuredInfo/FeaturedInfo";
import UserFeaturedInfo from "./components/user-featuredInfo/FeaturedInfo";
import ChartRevenue from "./components/revenue-chart/Chart";
import ChartUser from "./components/user-chart/Chart";
import ChartActiveUser from "./components/user-chart/ActiveChart";
import { revenueData, userActiveData, userData } from "./constants/dummyData";
import OnSeriesItemClick from "./components/user-chart/userTypePieChart";
import UserAgeGroupChart from "./components/user-chart/userAgeGroupChart";
import NewVsReturnUserChart from "./components/user-chart/newVsReturnChart";
import PremiumConvensionBar from "./components/user-chart/PremiumConversionRateChart";
import IncomeExpensesChart from "./components/revenue-chart/IncomeAndExpensesChart";
import ExpensesFeaturedInfo from "./components/revenue-featuredInfo/ExpensesInfo";
import IncomeFeaturedInfo from "./components/revenue-featuredInfo/IncomeInfo";
import ExpensesMonthlyChart from "./components/revenue-chart/MonthlyExpensesChart";
import IncomeMonthlyChart from "./components/revenue-chart/MonthlyIncomeChart";
import Login from "./components/login/login";

function Revenue() {
  return (
    <>
      <FeaturedInfo />

      <ChartRevenue
        data={revenueData}
        title="Revenue Monthly Analystic"
        grid
        dataKey={"Revenue"}
      />
      <ExpensesFeaturedInfo />
      <ExpensesMonthlyChart />

      <IncomeFeaturedInfo />
      <IncomeMonthlyChart />
      <IncomeExpensesChart />
    </>
  );
}

function User() {
  return (
    <>
      <UserFeaturedInfo />
      <ChartUser
        data={userData}
        title="Monthly New User Analystic"
        grid
        dataKey={"Monthly User"}
      />
      <NewVsReturnUserChart />
      <PremiumConvensionBar />
      <OnSeriesItemClick />
      <UserAgeGroupChart />
      <ChartActiveUser
        data={userActiveData}
        title="Active User Analystic"
        grid
        dataKey={"Monthly User"}
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainLayout />}>
          <Route index element={<Revenue />} />
          <Route path="orders" element={<Blank />} />
          <Route path="products" element={<Blank />} />
          <Route path="/main/users" element={<User />} />
          <Route path="settings" element={<Blank />} />
          <Route path="stats" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
