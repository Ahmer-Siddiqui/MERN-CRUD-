const express = require('express');  
const { addFormData, getFormData, deleteformdata, updateformdata, getSingleFormData } = require('../controllers/FormDataController');
const router = express.Router();

router.route('/addformdata').post(addFormData);
router.route('/getformdata').get(getFormData);
router.route('/deleteformdata/:id').delete(deleteformdata);
router.route('/updateformdata/:id').put(updateformdata);
router.route('/getsingleformdata/:id').get(getSingleFormData);

module.exports = router;