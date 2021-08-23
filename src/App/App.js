import AboutPromotions from "../components/AboutPromotions/AboutPromotions";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import Eligibility from "../components/Eligibility/Eligibility";
import Navigation from "../components/Navgation/Navigation";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <ComingSoon/>
      <AboutPromotions/>
      <Eligibility/>
    </div>
  );
}

export default App;
