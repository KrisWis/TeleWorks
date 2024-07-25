import {
  Additional_Services,
  Ads,
  Advancement,
  Buy_placement,
  Guarantor_Services,
  Header,
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
import "@/shared/main.scss";
import { memo, useEffect } from "react";

export const MainPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("mainPage");
  }, []);

  return (
    <>
      <Header />

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
    </>
  );
});
