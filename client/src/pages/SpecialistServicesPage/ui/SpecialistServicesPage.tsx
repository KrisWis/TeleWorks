import "./SpecialistServicesPage.scss";
import "@/shared/main.scss";
import { SpecialistServices } from "@/widgets/SpecialistServicesPage_widgets/SpecialistServices";
import { useEffect } from "react";

export const SpecialistServicesPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("SpecialistServicesPage");
    document.title = `TeleWorks | Услуги специалистов`;
  }, []);

  return (
    <main className="Page SpecialistServicesPage__main">
      <div className="padding">
        <SpecialistServices />
      </div>
    </main>
  );
};
SpecialistServicesPage.displayName = "SpecialistServicesPage";
