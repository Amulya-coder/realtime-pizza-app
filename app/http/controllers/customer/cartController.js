function cartController(){

    return{
        cart(req,res){
            res.render("Customers/cart");
        },

        update(req,res){
            
            return res.json({data: 'ALL ok'})
        }
    }
    
    }
    
    module.exports=cartController;