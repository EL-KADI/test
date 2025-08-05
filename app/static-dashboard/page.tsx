import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import DashboardWelcome from '../components/dashboard-welcome';
import DomainManagement from "../components/domain-management";
import DashboardOverview from "../components/dashboard-overview";
import PerformanceTracking from "../components/performance-tracking";
import TechStack from "../components/tech-stack";
import Questions from "../components/questions";
import Footer from "../../components/footer";
import KeyFeaturesTwo from "../components/key-features-two";
const StaticDashboard = () => {
  return (
    <>
    <Header />
         <div className="bg-[#2B1F51]  mb-20 ">
           <div className="translate-y-2"><Navigation /></div>     
              </div>
<DashboardWelcome/>
<div className="my-16"><DomainManagement/></div>
<DashboardOverview/>
<PerformanceTracking/>
<TechStack/>
<KeyFeaturesTwo/>

     <div className="mt-16">
        <Questions />
      </div>
      <Footer />
    </>
  );
};

export default StaticDashboard;