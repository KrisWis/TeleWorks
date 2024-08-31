import "./SpecialistServicesPage.scss";
import "@/shared/main.scss";
import { SpecialistServices } from "@/widgets/SpecialistServicesPage_widgets/SpecialistServices";
import { useEffect } from "react";

export const SpecialistServicesPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("SpecialistServicesPage");
  }, []);

  return (
    <main className="Page SpecialistServicesPage__main">
      <div className="padding">
        <SpecialistServices />
      </div>
    </main>
  );
};
