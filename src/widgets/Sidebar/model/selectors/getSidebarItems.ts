import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "../../../../entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";
import ProfileIcon from "shared/assets/icons/profile-link.svg";
import ArticleIcon from "shared/assets/icons/articles.svg";
import { SidebarItemsType } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemsType[] = [
        {
            path: RoutePath.main,
            text: "Главная",
            Icon: MainIcon,
        },
        {
            path: RoutePath.about,
            text: "О сайте",
            Icon: AboutIcon,
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: `${RoutePath.profile}${userData.id}`,
                text: "Профиль",
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: "Статьи",
                Icon: ArticleIcon,
                authOnly: true,
            }
        );
    }

    return sidebarItemsList;
});
