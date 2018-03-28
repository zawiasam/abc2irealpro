import { RootState } from "@ireal-text-editor/models";

export const selectUserId = (s: RootState) => {
    let userId: string | null = null;
    if (s.authState.userInfo) {
        userId = s.authState.userInfo.uid;
    }
    return userId;
}