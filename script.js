const inputField = document.getElementById('inputField');
const validateButton = document.getElementById('validateButton');

// إضافة الحدث على الزر
validateButton.addEventListener('click', function () {
    // التحقق من محتوى الإدخال
    if (inputField.value.trim() === '') {
        alert('The input is empty.');
    } else {
        alert('Form submitted successfully!');
        inputField.value = ''; // تفريغ الحقل بعد الإرسال
    }
});
