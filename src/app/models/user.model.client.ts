export class User {
  _id: Number;
  Username: String;
  Date_Created: Date;
  Password: String;
  First_Name: String;
  Last_Name: String;
  Role: String;
  Phone: String;
  Email: String;

  constructor(username = "", password = "") {
    (this.Username = username), (this.Password = password);
  }
}
