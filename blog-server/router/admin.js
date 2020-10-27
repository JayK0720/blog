const router = require("koa-router")({prefix:"/api"});
const controller = require('../controller/admin.js');

router.post("/login", controller.login);
router.post("/register",controller.register);
router.post("/logout",controller.logout);
router.post("/find_password",controller.find_password);

module.exports = router;