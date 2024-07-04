import {
  Advancement,
  Buy_placement,
  HowItWorks,
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
    </main>
  );
};
