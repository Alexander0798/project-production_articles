import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Currency } from "../../../../Currency";
import { Country } from "../../../../Country";
import { updateProfileData } from "./updateProfileDate";
import { ValidateProfileError } from "../../types/Profile";
const data = {
    firstName: "Alex",
    lastName: "Profi",
    age: 29,
    currency: Currency.RUB,
    country: Country.Armenia,
    city: "Taganrog",
    username: "admin",
};
describe("updateProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });
    test("server error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...data, lastName: "" } } });
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
