const router = require('express').Router()

const Controller = require('../controllers');
const controller = new Controller('document');

router.post('/', controller.getAll.bind(controller))
// router.get('/:id(\\d+)', controller.selectOneByID.bind(controller))

module.exports = router;