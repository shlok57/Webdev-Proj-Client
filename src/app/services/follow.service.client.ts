export class FollowServiceClient {
  LOCAL_URL = "http://localhost:4000";
  REMOTE_URL = "https://webdev-proj-server.herokuapp.com";

  VARIABLE_URL = this.REMOTE_URL;

  USER_URL = this.VARIABLE_URL + "/api/user/UID";
  CURRENT_USER__URL = this.VARIABLE_URL + "/api/user";

  follow(toUserId) {
    return fetch(this.USER_URL.replace("UID", toUserId) + "/follow", {
      method: "post",
      credentials: "include"
    });
  }

  unfollow(toUserId) {
    return fetch(this.USER_URL.replace("UID", toUserId) + "/unfollow", {
      method: "delete",
      credentials: "include"
    });
  }

  getFollowers(userId) {
    return fetch(this.USER_URL.replace("UID", userId) + "/followers").then(
      response => response.json()
    );
  }

  getFollowersForCurrentUser() {
    return fetch(this.CURRENT_USER__URL + "/followers", {
      credentials: "include"
    }).then(response => response.json());
  }

  getFollowing(userId) {
    return fetch(this.USER_URL.replace("UID", userId) + "/following").then(
      response => response.json()
    );
  }

  getFollowingForCurrentUser() {
    return fetch(this.CURRENT_USER__URL + "/following", {
      credentials: "include"
    }).then(response => response.json());
  }
}
