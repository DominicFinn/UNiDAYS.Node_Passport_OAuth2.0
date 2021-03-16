const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/unidays', passport.authenticate('oauth2', {
    scope: ['openid', 'name', 'email', 'verification']
}));

router.get('/unidays-callback', passport.authenticate('oauth2'), (req, res) => {
    res.redirect('/');
});

module.exports = router;
