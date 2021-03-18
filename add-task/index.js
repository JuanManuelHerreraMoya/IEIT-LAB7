module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    if(req.method=="GET"){
        context.res={
            status:200,
            body:newTask
			
        }

    } else if(req.method=="POST"){
        const task = req.body;
        newTask.push(task)
        context.res = {
            status:201
        }

    }

    
};

    var newTask= [
		{
			id:1,
			text:"Prueba",
			status:"In Progrees",
			dueDate: new Date(),
			responsible: "Juan Herrera"
		}
	];