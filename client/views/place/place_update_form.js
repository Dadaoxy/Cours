Template.place_update_form.rendered = function(){
	Session.set("place_update_page", true);
}

Template.place_update_form.events({   
    "submit form": function(e){
        e.preventDefault();
        var place ={
	        _id: Session.get("current_place") ? Session.get("current_place") : null,
	        title: $("#input-title").val(),
	        description: $("#input-description").val(), 
	        location: Session.get("geographical_search").location,
	        address: Session.get("geographical_search").address
    	};
        upsert_place(place);
    }
});

Template.place_update_form.helpers({
	current_place : function(){
		return Places.find(Session.get("current_place")).fetch()[0];
	}
});

Template.place_update_form.destroyed = function(){
	Session.set("place_update_page", false);
}