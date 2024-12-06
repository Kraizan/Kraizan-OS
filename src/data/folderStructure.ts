interface Folder {
  name: string;
  path: string;
  image: string;
  children: { [key: string]: Folder };
}

export const folderStructure: { root: Folder } = {
  root: {
    name: "root",
    path: "/",
    image: "",
    children: {
      Home: {
        name: "Home",
        path: "/Home",
        image: "",
        children: {
          Work: {
            name: "Work",
            path: "/Home/Work",
            image: "/assets/work-folder.png",
            children: {},
          },
          Projects: {
            name: "Projects",
            path: "/Home/Projects",
            image: "/assets/code-folder.png",
            children: {
              Project1: {
                name: "Project1",
                path: "/Home/Projects/Project1",
                image: "/assets/code-folder.png",
                children: {},
              },
              Project2: {
                name: "Project2",
                path: "/Home/Projects/Project2",
                image: "/assets/code-folder.png",
                children: {},
              },
            },
          },
          Certificates: {
            name: "Certificates",
            path: "/Home/Certificates",
            image: "/assets/cert-folder.png",
            children: {},
          },
        },
      },
    },
  },
};