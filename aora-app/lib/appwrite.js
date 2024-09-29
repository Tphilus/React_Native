import { Client, Account } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.philus.aora",
  projectId: "66f6d202001fe2845a00",
  databaseId: "66f6d3fa00346937bd58",
  userCollectionId: "66f6d4410002a0da5f3f",
  videoCollectionId: "66f6d4a700285ec4c283",
  storageId: "66f6d73200033c74ccf8",
};

const client = new Client();
client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  account
    .create(ID.unique(), "tkanateydadzie@gmail.com", "password", "Philus")
    .then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
};
