import "./SpecialistServicesPage.scss";
import "@/shared/main.scss";
import { Footer, Header, SpecialistServices } from "@/widgets";
import { memo, useEffect } from "react";

export const SpecialistServicesPage: React.FC = memo((): React.JSX.Element => {
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
});
