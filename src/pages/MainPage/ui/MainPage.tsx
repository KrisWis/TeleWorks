import "./MainPage.scss";
import "@/shared/main.scss";
import { Additional_Services } from "@/widgets/MainPage_widgets/Additional_Services";
import { MainPagePublicity } from "@/widgets/MainPage_widgets/MainPagePublicity";
import { Advancement } from "@/widgets/MainPage_widgets/Advancement";
import { Buy_placement } from "@/widgets/MainPage_widgets/Buy_placement";
import { Guarantor_Services } from "@/widgets/MainPage_widgets/Guarantor_Services";
import { HowItWorks } from "@/widgets/MainPage_widgets/HowItWorks";
import { Job_Risks } from "@/widgets/MainPage_widgets/Job_Risks";
import { MeetAdvantages } from "@/widgets/MainPage_widgets/MeetAdvantages";
import { Platform_Privileges } from "@/widgets/MainPage_widgets/Platform_Privileges";
import { SupportService } from "@/widgets/MainPage_widgets/SupportService";
import { Transaction_Advantage } from "@/widgets/MainPage_widgets/Transaction_Advantage";
import { WeAreTrusted } from "@/widgets/MainPage_widgets/WeAreTrusted";
import { useEffect } from "react";

export const MainPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("mainPage");
  }, []);

  return (
    <>
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
          <MainPagePublicity />
          <Guarantor_Services />
          <Job_Risks />
          <Transaction_Advantage />
          <SupportService />
        </div>
      </main>
    </>
  );
};
