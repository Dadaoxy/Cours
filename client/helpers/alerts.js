Alerts = new Meteor.Collection(null);

insert_alert = function(message,type){
    Alerts.insert({message : message, type : type, seen : false});
}

clear_alerts = function() {
    Alerts.remove({seen:true});
}