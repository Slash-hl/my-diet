function loginSuccess(req, res) {
    res.sendStatus(200);
}

function logout(req, res) {
    req.logout();
    res.sendStatus(401);
}

module.exports = {
    loginSuccess,
    logout
};
