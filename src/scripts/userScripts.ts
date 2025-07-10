import User from '../models/user';

export const addAccountTypeToAllUser = async () => {
    try {
        const result = await User.updateMany(
            { accountType: { $exists: false } },
            { $set: { accountType: "user" } }
        );
        console.log(`Modified ${result.modifiedCount} documents`);
    } catch (err) {
        console.error('Error updating documents:', err);
    }
};
