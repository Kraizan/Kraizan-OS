interface Folder {
  name: string;
  path: string;
  children: { [key: string]: Folder };
}

export const folderStructure: { root: Folder } = {
  root: {
    name: "root",
    path: "/",
    children: {
      Work: {
        name: "Work",
        path: "/Work",
        children: {},
      },
      Projects: {
        name: "Projects",
        path: "/Projects",
        children: {
          Project1: {
            name: "Project1",
            path: "/Projects/Project1",
            children: {},
          },
          Project2: {
            name: "Project2",
            path: "/Projects/Project2",
            children: {},
          },
        },
      },
      Certificates: {
        name: "Certificates",
        path: "/Certificates",
        children: {},
      },
    },
  },
};
