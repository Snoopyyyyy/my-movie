const data = [{
    email: "Admin@gmail.com",
    password: "Admin"
}];

export let Service = {
    register: (email, password) => {
        let message = 'connection success';
        let type = 'done';

        if (data.filter(user => user.email === email).length) {
            type = 'error';
            message = 'Email already exist';
        } else {
            data.push({
                email: email,
                password: password
            });
        }

        return {type, message};
    },
    login: (email, password) => {
        let message = 'connection success';
        let type = 'done';

        let user = data.find(user => user.email === email);
        if (user) {
            if (user.password !== password) {
                type = 'error';
                message = 'Password invalid';
            }
        } else {
            type = 'error';
            message = 'No user found with that email';
        }

        return {type, message};
    }
};