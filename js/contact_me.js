$(function() {
      window.onload = function() {
          $('#formSubmit').on('click', function(event) {
              event.preventDefault();

              if ($('#name').val() == '' || $('#email').val() == '' || $('#message').val() == '') {
                  $.notify("Всички полета трябва да са попълнени!", "error");
              } else {
                $.notify("Моля изчакайте имейлът се изпраща!", "success");

                var templateParams = {
                  name: $('#name').val(),
                  email: $('#email').val(),
                  message: $('#message').val()
                };

                emailjs.send('veni', 'template_cjFZdC1d', templateParams,  'user_5RVnAQiYpSgrQB8xwwqWK')
                .then(function(response) {
                    $.notify("Успешно изпратен имейл", "success");
                    $('#name').val('')
                    $('#email').val('')
                    $('#message').val('')
                }, function(error) {
                    $.notify("Грешка... " + error.message, "error");
                    console.log(error.message)
                });
              }
          });
      }
})
