const { connection } = require("../db/mysql");
class UserService {
  constructor() {
    this.table = "users";
    this.connection = connection;
  }

  async getUsers() {
    try {
      const [data,other_data] = await this.connection.query("SELECT * FROM users");
      return data
    } catch (error) {
      console.log(`Error: ${error}`);
      return []
    }
  }

  async getUser() {
    try {
      const [data,other_data] = await this.connection.query(`SELECT * FROM users WHERE email = '${email}'`);
      return data
    } catch (error) {
      console.log(`Error: ${error}`);
      return []
    }
  }

  async loginUser(email) {
    try {
      const [data,other_data] = await this.connection.query(`SELECT * FROM users WHERE email = '${email}'`);
      return data || []
    } catch (error) {
      console.log(`Error: ${error}`);
      return []
    }
  }
}

module.exports = UserService;
