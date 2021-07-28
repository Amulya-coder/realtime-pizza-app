function cartController(){

    return{
        cart(req,res){
            res.render("Customers/cart");
        }
    }
    
    }
    
    module.exports=cartController;