export class User {
  _id: Number;
  username: String;
  dateCreated: Date;
  password: String;
  firstName: String;
  lastName: String;
  role: String;
  phone: String;
  email: String;
  aboutMe: String;

  constructor(username = "", password = "") {
    (this.username = username), (this.password = password);
  }
}
