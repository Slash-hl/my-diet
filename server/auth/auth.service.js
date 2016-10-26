'use strict';
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.sendStatus(401);
    }
}

function initRequest(req, res, next) {
    /*Object.assign(req, {
        getCurrentUser,
        isAuthenticated
    });*/
    next();
}

module.exports = {
    ensureAuthenticated,
    initRequest
};
