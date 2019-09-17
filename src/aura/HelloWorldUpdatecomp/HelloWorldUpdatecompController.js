({
	doInit : function(component, event, helper) {
        
        // Create the action

        var action = component.get("c.Test");

        // Add callback behavior for when response is received

        action.setCallback(this, function(response) {

        var state = response.getState();

        console.log(response.getReturnValue());
        
        if (state == "SUCCESS") {

           component.set("v.cnts", response.getReturnValue());

         }

         else {

          console.log("Failed with state: " + state);

          }
    
        });
    }
	
})