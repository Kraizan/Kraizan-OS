interface BaseItem {
  name: string;
  path: string;
  image: string;
}

interface Folder extends BaseItem {
  type: "folder";
  children: { [key: string]: Folder | File };
}

interface File extends BaseItem {
  type: "file";
  content: string;
  children: {};
}

export type FolderItem = Folder | File;

export const folderStructure: { root: Folder } = {
  root: {
    name: "root",
    path: "/",
    image: "",
    type: "folder",
    children: {
      Home: {
        name: "Home",
        path: "/Home",
        image: "",
        type: "folder",
        children: {
          Work: {
            name: "Work",
            path: "/Home/Work",
            image: "/assets/work-folder.png",
            type: "folder",
            children: {
              "Work.md": {
                name: "Work.md",
                path: "/Home/Work/Work.md",
                image: "/assets/file.png",
                type: "file",
                content: `
# Work
Details about work experience.
                `.trim(),
                children: {},
              },
            },
          },
          Projects: {
            name: "Projects",
            path: "/Home/Projects",
            image: "/assets/code-folder.png",
            type: "folder",
            children: {
              "Project1.md": {
                name: "Project1.md",
                path: "/Home/Projects/Project1/Project1.md",
                image: "/assets/file.png",
                type: "file",
                content: `
# Project 1
Details about Project 1.
                `.trim(),
                children: {},
              },
              "Project2.md": {
                name: "Project2.md",
                path: "/Home/Projects/Project2/Project2.md",
                image: "/assets/file.png",
                type: "file",
                content: `
# Project 2
Details about Project 2.
                `.trim(),
                children: {},
              },
            },
          },
          Certificates: {
            name: "Certificates",
            path: "/Home/Certificates",
            image: "/assets/cert-folder.png",
            type: "folder",
            children: {
              "Certificates.md": {
                name: "Certificates.md",
                path: "/Home/Certificates/Certificates.md",
                image: "/assets/file.png",
                type: "file",
                content: `
# Certificates
Details about certificates.
                `.trim(),
                children: {},
              },
            },
          },
        },
      },
    },
  },
};