const { Squat_1rm_respect } = require('../../models');
module.exports={
    //squat_1rm_respect 생성
    post:async(req,res)=>{
        try {
            console.log(req.body.squat_1rm_id,req.body.user_id)
            if (!(req.body.squat_1rm_id && req.body.user_id)) return res.status(400).json({ message: 'Bad Request!' })
            const { squat_1rm_id, user_id } = req.body
            await Squat_1rm_respect.create({ squat_1rm_id, user_id })
            return res.status(201).json({ message: 'The respect has been done' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }

    },
}