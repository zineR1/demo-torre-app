const { Router } = require('express');
const axios = require('axios');
// const { response } = require('../app');
const router = Router();




router.get('/torreapp/:username', async (req, res) => {
    const username = req.params.username;
    const userInfo = await axios.get(`https://torre.bio/api/bios/${username}`);
    const userData = userInfo.data.person
    const strengths = userInfo.data.strengths.map(el =>{
        return{
            skill: el.name,
            proficiency: el.proficiency
        }
    })

    const experiences = userInfo.data.experiences.map(el=>{
        return{
            category: el.category,
            name: el.name,
            organization: el.organizations[0].name,
            startTime: el.fromMonth + " " + el.fromYear,
            finishTime: el.toMonth + " " + el.toYear
        }
    })
    const projects = experiences.filter(el => el.category == "projects")
    const education = experiences.filter(el=> el.category == "education")

    const profile = {
        name: userData.name,
        created: userData.created,
        img: userData.picture,
        strengths: strengths,
        projects: projects,
        education: education}
    
    
        profile? res.send(profile):
        res.status(404).send("This user doesn´t exist");  
    }
// }
);





module.exports = router;
