import "./SpecialistServicesPage.scss";
import "@/shared/main.scss";
import { Header } from "@/widgets/Global_widgets/Header";
import { SpecialistServices } from "@/widgets/SpecialistServicesPage_widgets/SpecialistServices";
import { Footer } from "@/widgets/Global_widgets/Footer";
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
      <Footer />
    </>
  );
};
