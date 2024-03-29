import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile, ValidateProfileError } from "../../types/Profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    "/profile/updateProfileDate",
    async (_, thunkAPi) => {
        const { extra, rejectWithValue, getState } = thunkAPi;
        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            const response = await extra.api.put<Profile>(`/profile${formData?.id}`, formData);

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (err) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    }
);
