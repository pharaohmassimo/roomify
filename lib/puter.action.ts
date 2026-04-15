import puter from "@heyputer/puter.js";

export const signIn = async () => {
    try {
        const result = await puter.auth.signIn();
        console.log("Sign in result:", result);
        return result;
    } catch (error) {
        console.error("Sign in error:", error);
        throw error;
    }
};

export const signOut = async () => {
    try {
        puter.auth.signOut();
        console.log("Signed out successfully");
    } catch (error) {
        console.error("Sign out error:", error);
        throw error;
    }
};

export const getCurrentUser = async () => {
    try {
        return await puter.auth.getUser();
    } catch (error) {
        console.error("Get user error:", error);
        return null;
    }
}