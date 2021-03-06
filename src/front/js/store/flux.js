const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      auth: false,
      userDetails: {},
      groupDetails: [
        {
          name: "luis",
        },
      ],
      userList: null,
      groupInfo: [
        {
          name: "null",
          city: "null",
          speed: "null",
          distance: "null",
          id: "null",
          routetype: "null",
        },
      ],
      mygroupsInfo: [
        {
          name: "null",
          city: "null",
          speed: "null",
          distance: "null",
          id: "null",
          routetype: "null",
        },
      ],
      profile: {},
      user: {},
      comment: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      loginUser: async (values) => {
        try {
          const logUser = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
            }),
          };
          const response = await fetch(
            process.env.BACKEND_URL + "/api/login",
            logUser
          );
          const data = await response.json();
          if (response.ok) {
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("name", data.name);
            localStorage.setItem("city", data.city);
            localStorage.setItem("speed", data.speed);
            localStorage.setItem("auth", true);
            setStore({
              auth: true,
            });
            return data;
          } else {
            return false;
          }
        } catch (error) {
          console.log("There is an error with the server", error);
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("auth");
        localStorage.removeItem("name");
        setStore({
          auth: false,
        });
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({
            message: data.message,
          });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({
          demo: demo,
        });
      },

      createGroup: async (values) => {
        try {
          const newGroup = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: values.groupName,
              city: values.groupCity,
              distance: values.groupDistance,
              speed: values.groupSpeed,
              routetype: values.groupRoutetype,
            }),
          };

          const response = await fetch(
            process.env.BACKEND_URL + "/api/new_group",
            newGroup
          );
          const data = await response.json();
          if (response.ok) {
            return data;
          } else {
            alert("Seems like this group already exists!");
          }
        } catch (error) {
          console.log("There is an error with the server", error);
        }
      },

      //fetch GET para traer info usuario para editar perfil
      //Fetch para traer info grupos
      groupInfo: () => {
        fetch(process.env.BACKEND_URL + "/api/dashboard_info")
          .then((response) => response.json())
          .then((data) => {
            setStore({
              groupInfo: data,
            });
            // localStorage.setItem("groupName", data.name);
            // .catch((err) => console.error(err));
          });
      },

      //Fetch para traer info grupos a los que pertenezco
      mygroupsInfo: () => {
        const accesToken = localStorage.getItem("token");
        fetch(process.env.BACKEND_URL + "/api/get_usergroups", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accesToken,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({
              mygroupsInfo: data,
            });
            // localStorage.setItem("groupName", data.name);
            // .catch((err) => console.error(err));
          });
      },

      getUserList: () => {
        fetch(process.env.BACKEND_URL + "/api/all_users")
          .then((response) => response.json())
          .then((data) => {
            setStore({
              userList: data,
            });
            // localStorage.setItem("groupName", data.name);
            // .catch((err) => console.error(err));
          });
      },

      registerUser: async (values) => {
        try {
          const newUser = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
              name: values.name,
              city: values.city,
              distance: values.distance,
              speed: values.speed,
              routetype: values.routes,
              bikemodel: "",
            }),
          };
          const response = await fetch(
            process.env.BACKEND_URL + "/api/register",
            newUser
          );
          const data = await response.json();
          if (response.ok) {
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("auth", true);
            localStorage.setItem("name", values.name);
            setStore({
              auth: true,
            });
            return data;
          } else {
            alert("Can't create this user");
          }
        } catch (error) {
          console.log("There is an error with the server", error);
        }
      },

      userInfo: () => {
        const accesToken = localStorage.getItem("token");
        console.log(accesToken);
        fetch(process.env.BACKEND_URL + "/api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accesToken,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({
              profile: data,
            });
            // localStorage.setItem("groupName", data.name);
            // .catch((err) => console.error(err));
          });
      },

      //Fetch PUT para actualizar datos de perfil

      userUpdate: (user) => {
        const accesToken = localStorage.getItem("token");
        console.log(accesToken);
        fetch(process.env.BACKEND_URL + "/api/user/edit", {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accesToken,
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({
              user: data,
            });
            console.log(getStore().user);
          });
      },

      //Fetch POST para crear comentarios

      addComment: (group_id, data) => {
        const { text } = data;
        const accesToken = localStorage.getItem("token");

        fetch(process.env.BACKEND_URL + "/api/comment/" + group_id, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accesToken,
          },
          body: JSON.stringify({
            text: text,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            getActions().getComment(group_id);
          });
      },

      //Fetch GET para traer comentarios

      getComment: (id) => {
        //const accesToken = localStorage.getItem("token");
        //console.log(accesToken);
        fetch(process.env.BACKEND_URL + "/api/get_comment/" + id, {
          method: "GET",
          //headers: {
          //Authorization: "Bearer " + accesToken,
          //},
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({
              comment: data,
            });
            // localStorage.setItem("groupName", data.name);
            // .catch((err) => console.error(err));
          });
      },

      joinGroup: async (groupid) => {
        try {
          const accessToken = localStorage.getItem("token");
          const joinGroup = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + accessToken,
            },
            body: JSON.stringify({
              groupId: groupid,
            }),
          };
          const response = await fetch(
            process.env.BACKEND_URL + `/api/add_group/${groupid}`,
            joinGroup
          );

          if (response.ok) {
            const data = await response.json();
            console.log(data);
            return true;
          } else {
            alert("Not able to join group");
          }
        } catch (error) {
          console.log("There is an error with the server", error);
        }
      },
    },
  };
};

export default getState;
