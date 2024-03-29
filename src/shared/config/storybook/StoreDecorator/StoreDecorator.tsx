import { Story } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { profileReducer } from "../../../../entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../../../entities/Article/model/slice/ArticleDetailsSlice";
import { addCommentFormReducer } from "features/addCommentForm/model/slice/addCommentFormSlice";
import { articlePageReducer } from "pages/ArticlesPage/model/slice/articlePageSlice";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsReducer,
    articlePage: articlePageReducer,
};
const StoreDecorator = (state: Partial<StateSchema>, asyncReducers?: ReducersList) => {
    const story = (Story: Story) => (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <Story />
        </StoreProvider>
    );
    return story;
};
export default StoreDecorator;
