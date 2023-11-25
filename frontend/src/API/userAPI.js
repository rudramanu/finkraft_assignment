const BASE_URL = "http://localhost:9800";
export const signup = async (name, email, password) => {
  const url = `${BASE_URL}/user/signup`;
  const data = {
    name: name,
    email: email,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const user = await response.json();
    alert(user.message);
    return user;
  } catch (error) {
    throw new Error("Signup failed: " + error.message);
  }
};

export const login = async (email, password) => {
  const url = `${BASE_URL}/user/login`;
  const data = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("df", response);
    if (response.status != 200) {
      const error = await response.json();
      return alert(error.message);
    }
    const user = await response.json();
    sessionStorage.setItem("token", user.token);
    sessionStorage.setItem("name", user.name);
    alert(user.message);

    return user;
  } catch (error) {
    throw new Error("Login failed: " + error.message);
  }
};
