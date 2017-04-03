$(function () {

    jQuery.validator.addMethod("phoneCustom", function (value, element) {
        return  /^\+?[\d|\(|\)|\s|-]{4,}$/.test(value);
    }, "Please specify the correct phone");

    $("#callbackForm").validate({
        rules: {
			name: "required",
            phone: {
				required: true,
                phoneCustom: true
            }
        },
        messages: {
			name: "Введите имя",
            phone: {
				required: "Введите телефон",
				phoneCustom: "Неверный формат номера"
			}
        },

        submitHandler: function(form) {

			var submitButton = $(".callbackSubmitButton");
            var name = $(form).find("[name='name']").val();
            var phone = $(form).find("[name='phone']").val();

            $(submitButton).hide();

            $.ajax({
                type: "POST",
                url: "/mailCallbackSend.php",
				dataType: "json",
                timeout: 10000,
                data: { name: name, phone: phone }
            }).done(function( data ) {
                    if (data['status'] == 'success')
                    {
                        alert( "Ваша заявка создана!" );
                    } else
                    {
                        alert('Ошибка при добавлении заявки!');
                        $(submitButton).show();
                    }
                }).fail(function() {
                    alert('Ошибка при добавлении заявки!');
                    $(submitButton).show();
                });
        }

    });

	
	
	   $("#messageForm").validate({
        rules: {
			name: "required",
			message: "required",
            phone: {
				required: true,
                phoneCustom: true
            }
        },
        messages: {
			name: "Введите имя",
			message: "Введите сообщение",
            phone: {
				required: "Введите телефон",
				phoneCustom: "Неверный формат номера"
			}
        },

        submitHandler: function(form) {

			var submitButton = $(".messageSubmitButton");
            var name = $(form).find("[name='name']").val();
            var phone = $(form).find("[name='phone']").val();
			var message = $(form).find("[name='message']").val();

            $(submitButton).hide();

            $.ajax({
                type: "POST",
                url: "/mailMessageSend.php",
				dataType: "json",
                timeout: 10000,
                data: { name: name, phone: phone, message: message }
            }).done(function( data ) {
                    if (data['status'] == 'success')
                    {
                        alert( "Ваша заявка создана!" );
                    } else
                    {
                        alert('Ошибка при добавлении заявки!');
                        $(submitButton).show();
                    }
                }).fail(function() {
                    alert('Ошибка при добавлении заявки!');
                    $(submitButton).show();
                });
        }

    });
	
	

});
