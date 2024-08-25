const express = require('express'); 

const { getProjects, getProject, createProject,updateProject,deleteProject} = require('../controllers/ProjectController');

const authenticateToken = require("../middlewares/auth");
const router = express.Router();

router.get('/projects',authenticateToken ,getProjects);
router.get('/project/:id',authenticateToken ,getProject);
router.post('/project',authenticateToken ,createProject);
router.put('/project/:id',authenticateToken , updateProject);
router.delete('/project/:id',authenticateToken ,deleteProject);

module.exports = router