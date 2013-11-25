Template.place_item.helpers({
	price: function(place_id){
		return  Courses.findOne({place_id : place_id, tag_id : Session.get("subject_search")}, {fields : { price : true}}).price;
	},
	time_slots: function(place_id){
		var course_id = Courses.findOne({place_id : place_id, tag_id : Session.get("subject_search")}, {fields: {_id : true}})._id;
		return TimeSlots.find({course_id : course_id});
	},
	not_search_page: function(){
		return !Session.get("search_page");
	}
});

Template.user_edit.events({
    "click .delete-place": function(e){
        e.preventDefault();
        
        if(confirm("Supprimer ce lieu ?")){
            var place_id = e.target.id
            Places.remove(place_id);
        }
    },
    "click .edit-place": function(e){
        e.preventDefault();
        var place_id = e.target.id;
        Meteor.Router.to("edit_place_form", place_id);
    }
});

