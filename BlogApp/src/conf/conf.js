const conf = {
  apURL: String(import.meta.env.VITE_APPWRITE_URL),
  apProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  apDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  apCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  apBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
