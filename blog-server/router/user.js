const router = require("koa-router")({prefix:"/api/user"});
const controller = require('../controller/user.js');

router.post("/login", controller.login);
router.post("/register",controller.register);
router.post("/logout",controller.logout);
router.post("/is_logged",controller.is_logged);
router.post('/verify',controller.verify);

module.exports = router;