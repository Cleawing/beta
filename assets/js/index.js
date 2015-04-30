analytics.ready(function(){
	ll('init', '6ea954880eed51314b8ec0c-b4038618-e94b-11e4-b23f-009c5fda0a25', {trackPageView: false, domain: 'cleawing.com'});
});

$(document).ready(function() {
    App.init();
    analytics.page("Beta", "Index");
    $.validate({
        form: '#register-form',
        onError : function() {
            return false;
        },
        onSuccess : function() {
            $("#join-button").prop("disabled", true);
            var formData = $("#register-form").serializeJSON();
            analytics.alias(formData.email);
            analytics.identify(formData.email, {
                "firstName" : formData.fName,
                "email" : formData.email
            });
            analytics.track("Signed up to Beta", {
                "LeadSource" : "beta.cleawing.com",
                "Status" : "Waiting"
            });
            
            $("#form-content").hide();
            $("#aloha").show();
            return false;
        },
    });
});