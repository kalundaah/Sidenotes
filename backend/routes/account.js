const express = require('express')
const router = express.Router()

const{
    getnotes,
    gettasks,
    getlabels,
    getaccount,
    postnotes,
    posttasks,
    postlabels,
    postaccount,
    putnotes,
    puttasks,
    putlabels,
    putaccount,
    deletenotes,
    deletetasks,
    deletelabels,
    deleteaccount
} = require('../controllers/account')

const {
    home,
    getsignin
}
 = require('../controllers/other')

router.route('/').get(home);
router.route('/signin').get(getsignin)
router.route('/:id/Notes').get(getnotes).post(postnotes).put(putnotes).delete(deletenotes);
router.route('/:id/Tasks').get(gettasks).post(posttasks).put(puttasks).delete(deletetasks);
router.route('/:id/Labels').get(getlabels).post(postlabels).put(putlabels).delete(deletelabels);
router.route('/:id/Account').get(getaccount).post(postaccount).put(putaccount).delete(deleteaccount);

module.exports = router