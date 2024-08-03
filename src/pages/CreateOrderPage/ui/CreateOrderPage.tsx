import { Footer } from "@/widgets/Global_widgets/Footer";
import "./CreateOrderPage.scss";
import "@/shared/main.scss";
import { Header } from "@/widgets/Global_widgets/Header";
import { useEffect } from "react";
import { memo } from "react";
import { CreateOrderProgress } from "@/widgets/CreateOrderPage_widgets/CreateOrderProgress";
import { CreateOrderCostContent } from "@/widgets/CreateOrderPage_widgets/CreateOrderCostContent";
import { createOrderCostPaymentProps } from "../model/CreateOrderPage_data";

export const CreateOrderPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CreateOrderPage");
  }, []);

  return (
    <>
      <Header />
      <main className="CreateOrderPage__main">
        <div className="padding">
          <CreateOrderProgress />

          <CreateOrderCostContent
            CreateOrderCostPaymentProps={createOrderCostPaymentProps}
          />
        </div>
      </main>
      <Footer />
    </>
  );
});
