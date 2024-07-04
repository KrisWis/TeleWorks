import {
  Advancement,
  Buy_placement,
  HowItWorks,
  MeetAdvantages,
  WeAreTrusted,
} from "@/widgets";
import "./MainPage.scss";

export const MainPage: React.FC = (): React.JSX.Element => {
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
    </main>
  );
};
