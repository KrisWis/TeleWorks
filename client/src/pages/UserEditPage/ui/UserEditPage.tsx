import "./UserEditPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import { memo } from "react";
import { UserEditPageWrapper } from "@/widgets/UserEditPage_widgets/UserEditPageWrapper";

export const UserEditPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("UserEditPage");
    document.title = `TeleWorks | Редактирование профиля`;
  }, []);

  return (
    <main className="UserEditPage__main">
      <div className="padding">
        <UserEditPageWrapper />
      </div>
    </main>
  );
});
