
$(document).ready(function() {
    $.validator.addMethod('regex', function(value, element, param) {
        return this.optional(element) ||
            value.match(typeof param == 'string' ? new RegExp(param) : param);
    },
    'Please enter a value in the correct format.');

    $("#__vtigerWebForm").validate({
        rules: {
            lastname: {
                required: true,
                regex: /^[a-zA-Z]+$/
            },
            email: {
                required: true,
                email: true,
                regex: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
            },
            homephone: {
                required: true,
                regex: /^[0-9]{7}$/
            }
        },
        messages: {
            lastname: {
                required:'This field is required',
                regex:'Name cannot have numbers'
            },
            email: {
                required:'This field is required',
                email:'You have not given a correct e-mail address',
                regex:'You have not given a correct e-mail address'

            },
            homephone: {
                required:'This field is required',
                regex:'Phone number require 7 digits'
            },
            mailingstreet:{
                required:'This field is required'
            }
        },
        submitHandler: function(form){
            form.submit();
        },
        invalidHandler: function(event, validator) {
            // 'this' refers to the form
            var errors = validator.numberOfInvalids();
            if (errors) {
              var message = "Please enter the proper information";
              $("div.error span").html(message);
              $("div.error").show();
            } else {
              $("div.error").hide();
            }
          }
    });

    $('#cf_644').change(function () {
        if ($(this).is(':checked')) {
            $('#mailingstreet').attr('required','true');
        } else {
            $('#mailingstreet').removeAttr('required');
        }
    });
});