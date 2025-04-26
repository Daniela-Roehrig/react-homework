const fields = {
    name: {
        type: "text",
        placeholder: "Ваше имя",
        name: "username",
        rules: {
            required: "Username must be exist"
        }
    },
    email: {
        type: "email",
        placeholder: "Ваш email",
        name: "email",
        rules: {
            required: "Email must be exist"
        }
    },
    text: {     
        type: "text",
        placeholder: "Введите сообщение",
        name: "text",
        rules: {
            required: "Message must be exist"
        }
    }
}
export default fields