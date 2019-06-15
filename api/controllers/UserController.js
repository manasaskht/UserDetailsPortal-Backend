/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    deleteUser459:async function(req, res){
        var id = req.param('email');
		
            sails.log(id);
            var result = await User.destroy({emailAddress:id}).fetch();
         

                // return res.redirect('/user');
                sails.log(result);
                return res.json(result[0]);	
	
    },
    deleteProfile459:async function(req, res){
        var id = req.param('hobby');
		
            sails.log(id);
            var result = await User.destroy({interests:id}).fetch();
				// if (err) return res.send(err,500);

                // return res.redirect('/user');
                return res.json(result);	
	
    },
   
    AgeCount: async function(req, res) {
        var id=req.param('age');
        if(id == ''|| id == '-' )
        {
            res.status(400).json({error});
        } 
      var result = await Profile.find({Age:{'>' :id}});
          
        return res.json(result);
      },

      retrieveprofilebymerge459:async function(req,res)
      {
        var id=req.param('email');
        
        var result = await User.find({emailAddress:id}).populate ('details');
        return res.json(result);
      }
    
};

