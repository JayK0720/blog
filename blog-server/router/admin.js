const router = require("koa-router")({prefix:"/api/admin"});
const controller = require('../controller/admin.js');

router.post("/login", controller.login);
router.post("/register",controller.register);
router.post("/logout",controller.logout);
router.post("/is_logged",controller.is_logged);

module.exports = router;