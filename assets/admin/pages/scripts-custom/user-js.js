var FormValidation = function () {

    // basic validation
    var handleValidation1 = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#form_sample_1');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);

        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            messages: {
                // select_multi: {
                //     maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                //     minlength: jQuery.validator.format("At least {0} items must be selected")
                // },
                name: {
                    minlength: "Please enter at least 5 characters",
                    required: "This field cannot be empty please enter a valid name."
                },
                email: {
                    email: "Email wrong format",
                    required: "This field cannot be empty please enter a valid email."
                },
                scope: {
                    minlength: "Please enter at least 2 characters",
                    required: "This field cannot be empty please enter a valid scope."
                }
            },
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                scope: {
                    required: true,
                    url: true
                }
            },




            invalidHandler: function (event, validator) { //display error alert on form submit              
                success1.hide();
                error1.show();
                Metronic.scrollTo(error1, -200);
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });


    }

    var handleValidation2 = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form2 = $('#form_sample_2');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            messages: {
                // select_multi: {
                //     maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                //     minlength: jQuery.validator.format("At least {0} items must be selected")
                // },
                name: {
                    minlength: "Please enter at least 5 characters",
                    required: "This field cannot be empty please enter a valid name."
                },
                scope: {
                    minlength: "Please enter at least 2 characters",
                    required: "This field cannot be empty please enter a valid scope."
                }
            },
            rules: {
                name: {
                    minlength: 5,
                    required: true
                },
                scope: {
                    required: true,
                    minlength: 2
                }
            },




            invalidHandler: function (event, validator) { //display error alert on form submit              
                success2.hide();
                error2.show();
                Metronic.scrollTo(error2, -200);
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                success2.show();
                error2.hide();
            }
        });


    }
	function resetform() {
		document.getElementById("form_sample_1").reset();
	}



    return {
        //main function to initiate the module
        init: function () {
            handleValidation1();
            handleValidation2();
			resetform();
        }

    };

}();