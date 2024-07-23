import "./SpecialistServicesPage.scss";
import "@/shared/main.scss";
import { Header, SpecialistServices } from "@/widgets";
import { useEffect } from "react";

export const SpecialistServicesPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("SpecialistServicesPage");
  }, []);

  return (
    <>
      <Header />
      <main className="SpecialistServicesPage__main">
        <div className="padding">
          <SpecialistServices />
        </div>
      </main>
    </>
  );
};
