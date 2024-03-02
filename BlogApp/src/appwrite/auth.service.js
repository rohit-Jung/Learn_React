import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.apURL).setProject(conf.apProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //TO directly login after register
        this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite Service :: createAccount :: error",error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite Service :: login :: error", error);
    }
  }

  async getUserAccount() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Service :: getUserAccount :: error", error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error("Appwrite Service :: logout :: error", error);
    }
    return null; //if nothing is found
  }
}

const authService = new AuthService();

export default authService;
