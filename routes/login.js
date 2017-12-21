var router = require('koa-router')();

router.post('/login', function* (ctx, next) {
    this.body = 'hello'
})

module.exports = router;