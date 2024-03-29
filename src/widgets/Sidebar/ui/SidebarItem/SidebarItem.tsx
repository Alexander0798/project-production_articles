import { FC, memo } from "react";
import cls from "./SidebarItem.module.scss";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { getUserAuthData } from "../../../../entities/User";
import { useSelector } from "react-redux";
import { SidebarItemsType } from "widgets/Sidebar/model/types/sidebar";

interface Props {
    item: SidebarItemsType;
    collapsed: boolean;
}

const SidebarItemComponent: FC<Props> = ({ item, collapsed }) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink theme={AppLinkTheme.SECONDARY} to={item.path} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
            <div className={cls.iconWrapper}>
                <item.Icon className={cls.icon} />
            </div>
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
};
export const SidebarItem = memo(SidebarItemComponent);
