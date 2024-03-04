import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client.setEndpoint(conf.apURL).setProject(conf.apProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, content, slug, featuredImage, userId, status }) {
    try {
      return await this.databases.createDocument(
        conf.apDatabaseId,
        conf.apCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          userId,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, status, featuredImage }) {
    try {
      return await this.databases.updateDocument(
        conf.apDatabaseId,
        conf.apCollectionId,
        slug,
        {
          title,
          content,
          status,
          featuredImage,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.apDatabaseId,
        conf.apCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.apDatabaseId,
        conf.apCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", ["active"])]) {
    try {
      return await this.databases.listDocuments(
        conf.apDatabaseId,
        conf.apCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite Service :: getPosts :: error", error);
      return false;
    }
  }

  //file upload
  async uploadFile(file) {
    try {
      return await this.storage.createFile(conf.apBucketId, ID.unique(), file);
    } catch (error) {
      console.log("Appwrite error :: uploadFile :: error " + error);
      return false;
    }
  }

  async deleteFile(fileID) {
    try {
      await this.storage.deleteFile(conf.apBucketId, fileID);
      return true;
    } catch (error) {
      console.log("Appwrite error :: deleteFile :: error " + error);
      return false;
    }
  }

  previewFile(fileID) {
    try {
      return this.storage.getFilePreview(conf.apBucketId, fileID);
    } catch (error) {
      console.log("Appwrite error :: previewFile :: error " + error);
      return false;
    }
  }
}

const service = new Service();

export default service;
