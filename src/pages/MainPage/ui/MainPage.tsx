import {
  Additional_Services,
  Ads,
  Advancement,
  Buy_placement,
  Guarantor_Services,
  HowItWorks,
  Job_Risks,
  MainPageFooter,
  MeetAdvantages,
  Platform_Privileges,
  SupportService,
  Transaction_Advantage,
  WeAreTrusted,
} from "@/widgets";
import "./MainPage.scss";
import { useEffect } from "react";

export const MainPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("mainPage");
  }, []);

  return (
    <main className="MainPage__main">
      <div className="padding">
        <Advancement />
        <Buy_placement />
        <WeAreTrusted />
      </div>

      <HowItWorks />

      <div className="padding">
        <MeetAdvantages />
      </div>

      <Platform_Privileges />

      <div className="padding">
        <Additional_Services />
        <Ads />
        <Guarantor_Services />
        <Job_Risks />
        <Transaction_Advantage />
        <SupportService />
        <MainPageFooter />
      </div>
    </main>
  );
};
