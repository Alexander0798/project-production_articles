import { FC, useMemo, useState } from "react";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { SidebarItemsList } from "widgets/Sidebar/model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface Props {
    className?: string;
}

export const Sidebar: FC<Props> = ({ className }: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const itemsList = useMemo(() => SidebarItemsList.map((item) => <SidebarItem item={item} key={item.path} collapsed={collapsed} />), [collapsed]);
    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button data-testid="sidebar-toggle" size={ButtonSize.L} square={true} className={cls.collapseBtn} theme={ThemeButton.BACKGROUND_INVERTED} onClick={onToggle}>
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>{itemsList}</div>
            <div className={classNames(cls.switcher)}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
