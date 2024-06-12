const express = require('express');
const router = express.Router();
const jobs = require('../models/jobs');
const { handleGetJobRouter } = require('../constrollers/roles');
const { checkForAuthentication, restrictTO } = require('../middlewares/auth');

router.post('/jobRoute', checkForAuthentication, handleGetJobRouter);
router.get('/alljobs', checkForAuthentication,restrictTO(['Admin','User','Editor']), async (req, res) => {
  try {
    const userRole = req.user.role;
    const query = (userRole === 'Admin'|| userRole === "User") ? {} : { createdBy: req.user._id };

    const allJobs = await jobs.find(query);

    return res.render('home', {
      jobs: allJobs,
      userRole: userRole,
    });
  } catch (error) {
    console.error(error.message);
  }
});

router.get('/delete/:id', checkForAuthentication, restrictTO(['Admin', 'Editor']), async (req, res) => {
  await jobs.findOneAndDelete({ _id: req.params.id });
  return res.status(400), res.redirect('/alljobs');
});
router.get('/edit/:id', checkForAuthentication, restrictTO(["Admin", "Editor"]), async (req, res) => {
  const allJobs = await jobs.findOne({ _id: req.params.id })
  return res.render('edit', { allJobs })
});

router.post('/update/:id', async (req, res) => {
  const { jobTitle, experience, jobLocation, salary, companyName } = req.body;
  await jobs.findByIdAndUpdate({ _id: req.params.id }, { jobTitle, experience, jobLocation, salary, companyName }, { new: true })
  return res.redirect('/alljobs');
});
module.exports = router;