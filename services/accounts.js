const api = {
  async signIn(email, password) {
    // TODO: Connect to API
    return {
      user: { id: 1, email },
      accessToken: "some secret token",
    };
  },
  async signUp(form) {
    // TODO: Connect to API
    return {
      user: { id: 1, email: form.email },
      accessToken: "some secret token",
    };
  },
  async revokeToken(token) {},
};

export default api;
