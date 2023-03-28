interface User {
     id: string;
     username: string;
     firstname?: string;
     lastname?: string;
     password: string;
     email: string;
     phoneNumber?: string;
     proffession: string;
     description: string;
     gender: string;
     avatar?: string;
     is_online?: boolean;
}

export default User