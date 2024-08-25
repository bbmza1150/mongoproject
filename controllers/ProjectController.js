const Project = require('../models/Project'); 


exports.getProjects = async(req,res) =>{
    try{
        const projects = await Project.find();
        res.status(200).json(projects);

    }catch (err){
        res.status(500).json({message: err.message});
    }
};

exports.getProject = async (req,res) =>{
    try{
        const { id } = req.params;
        const Project  = await Project.findById(id);
        if (!Project) return res.status(404).json({message:"Project not found"});
        res.status(200).json(Project);
    }catch (err){
        res.status(500).json({ message: err.message });
    }
};

exports.createProject = async (req,res) => {
    const {Project_name, File, DateStart, DateLasttime} = req.body;

    const Project = new Project({Project_name, File, DateStart, DateLasttime})
    try{
        const newProject = await Project.save();
        res.status(201).json(newProject);
    }catch (err){
        res.status(400).json({message: err.message});
    }
};

exports.updateProject = async (req,res) => {
    try{
        const {id} = req.params;
        const Project = await Project.findById(id);

        if(!Project) return res.status(404).json({message : 'Project not found'});
        const data = {$set : req.body};

        await Project.findByIdAndUpdate(id,data);

        res.status(200).json({ message: 'Project updated successfully' });
    }catch (err) { 

        res.status(400).json({ message: err.message }); 

    }
}

exports.deleteProject = async(req,res) =>{
    try{
        const { id } = req.params;
        const Project = await Project.findById(id);
        if(!Project) return res.status(404).json({message: 'Project not found'});
        await Project.findByIdAndDelete(id);
        res.status(200).json({ message: 'Project deleted successfully' });
    }catch(err){
        res.status(404).json({message : err.message});
    }
}