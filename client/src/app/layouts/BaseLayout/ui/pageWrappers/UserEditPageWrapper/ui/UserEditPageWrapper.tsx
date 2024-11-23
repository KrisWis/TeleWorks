import { UserEdit } from "@/widgets/UserEditPage_widgets/UserEdit";
import { UserEditTabs } from "@/widgets/UserEditPage_widgets/UserEditTabs";
import styles from "./UserEditPageWrapper.module.scss";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { UserEditPageContext, UserEditPageContextRefs } from "..";
import { UserEditTabsEnum } from "@/shared/const/user";

export const UserEditPageWrapper: React.FC = memo((): React.JSX.Element => {
  // Реализация скроллинга по табам
  const [ActiveUserEditTab, setActiveUserEditTab] = useState<UserEditTabsEnum>(
    UserEditTabsEnum.GENERAL,
  );

  const UserEditGeneralRef = useRef<HTMLDivElement>(null);
  const UserEditAboutRef = useRef<HTMLDivElement>(null);
  const UserEditPortfolioRef = useRef<HTMLDivElement>(null);

  const refs: UserEditPageContextRefs = useMemo(
    () => ({
      [UserEditTabsEnum.GENERAL]: UserEditGeneralRef,
      [UserEditTabsEnum.ABOUT]: UserEditAboutRef,
      [UserEditTabsEnum.PORTFOLIO]: UserEditPortfolioRef,
    }),
    [],
  );

  const wrapperRef = useRef<HTMLDivElement>(null);

  const observerOptions: IntersectionObserverInit = useMemo(
    () => ({ root: wrapperRef.current, rootMargin: "0px", threshold: 1.0 }),
    [],
  );

  const RefCanBeScroll = useRef<boolean>(true);

  const observer: IntersectionObserver = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          const refIndex = Object.values(refs).findIndex(
            (ref) => ref!.current == entry.target,
          );
          setActiveUserEditTab(
            (Object.keys(refs) as Array<keyof typeof refs>)[refIndex],
          );
          RefCanBeScroll.current = false;
        }
      }, observerOptions),
    [observerOptions, refs],
  );

  useEffect(() => {
    if (RefCanBeScroll.current) {
      if (refs[ActiveUserEditTab]) {
        refs[ActiveUserEditTab].current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      RefCanBeScroll.current = true;
    }
  }, [ActiveUserEditTab, refs]);

  useEffect(() => {
    for (const refElement in refs) {
      observer.observe(refs[refElement as UserEditTabsEnum]!.current!);
    }

    return () => {
      try {
        for (const refElement in refs) {
          observer.unobserve(refs[refElement as UserEditTabsEnum]!.current!);
        }
      } catch {
        () => {};
      }
    };
  }, [observer, refs]);

  useEffect(() => {
    document.body.scrollIntoView();
    setTimeout(() => {
      RefCanBeScroll.current = true;
    }, 100);
  }, []);

  return (
    <UserEditPageContext.Provider
      value={{
        ActiveUserEditTab,
        setActiveUserEditTab,
        refs,
      }}
    >
      <div className={styles.userEditPageWrapper}>
        <section className={styles.userEditPageWrapper__wrapper}>
          <UserEditTabs />
          <UserEdit />
        </section>

        <div className={styles.userEditPageWrapper__buttons}>
          <Button
            className={styles.userEditPageWrapper__button}
            type={ButtonTypes.BLACK_WITHOUT_OUTLINE}
            text="Вернуться в профиль"
          />

          <Button
            className={styles.userEditPageWrapper__button}
            type={ButtonTypes.RED}
            text="Сохранить изменения"
          />
        </div>
      </div>
    </UserEditPageContext.Provider>
  );
});
UserEditPageWrapper.displayName = "UserEditPageWrapper";
