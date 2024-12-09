

export const signout = (req, res) => {
    try {
        res.clearCookie('access_token', {
            httpOnly: true,
        });

        // Respond with success message
        res.status(200).json({ message: 'Sign out successful' });
    } catch (error) {
       next(error)
    }
};
