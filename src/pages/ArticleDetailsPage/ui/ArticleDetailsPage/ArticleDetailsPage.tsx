import { FC, memo } from "react";
import cls from "./ArticleDetailsPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

const ArticleDetailsPage: FC<Props> = (props) => {
    const { className } = props;
    const { t } = useTranslation("article");
    return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}></div>;
};

export default memo(ArticleDetailsPage);