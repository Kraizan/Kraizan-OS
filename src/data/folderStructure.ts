import { GapIncContent, YogLabsContent } from '@/data/md_files/work';

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
              "Gap_Inc.md": {
                name: "Gap_Inc.md",
                path: "/Home/Work/Gap_Inc.md",
                image: "/assets/file.png",
                type: "file",
                content: GapIncContent,
                children: {},
              },
              "YogLabs.md": {
                name: "YogLabs.md",
                path: "/Home/Work/YogLabs.md",
                image: "/assets/file.png",
                type: "file",
                content: YogLabsContent,
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
              "UniHub.md": {
                name: "UniHub.md",
                path: "/Home/Projects/UniHub/UniHub.md",
                image: "/assets/file.png",
                type: "file",
                content: `
# Project 1
Details about Project 1.
                `.trim(),
                children: {},
              },
              "Radiate.md": {
                name: "Radiate.md",
                path: "/Home/Projects/Radiate/Radiate.md",
                image: "/assets/file.png",
                type: "file",
                content: `
# Project 2
Details about Project 2.
                `.trim(),
                children: {},
              },
              "Period.md": {
                name: "Period.md",
                path: "/Home/Projects/Period/Period.md",
                image: "/assets/file.png",
                type: "file",
                content: `
# Project 2
Details about Project 2.
                `.trim(),
                children: {},
              },
              "Ecommerce.md": {
                name: "Ecommerce.md",
                path: "/Home/Projects/Ecommerce/Ecommerce.md",
                image: "/assets/file.png",
                type: "file",
                content: `
# Project 2
Details about Project 2.
                `.trim(),
                children: {},
              },
              "Second_Hand.md": {
                name: "Second_Hand.md",
                path: "/Home/Projects/Second_Hand/Second_Hand.md",
                image: "/assets/file.png",
                type: "file",
                content: `
# Project 2
Details about Project 2.
                `.trim(),
                children: {},
              },
              "AniSearch.md": {
                name: "AniSearch.md",
                path: "/Home/Projects/AniSearch/AniSearch.md",
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
              "AWS_Cloud_Essentials.md": {
                name: "AWS_Cloud_Essentials.md",
                path: "/Home/Certificates/AWS_Cloud_Essentials.md",
                image: "/assets/file.png",
                type: "file",
                content: `
# Certificates
Details about certificates.
                `.trim(),
                children: {},
              },
              "Postman_Student_Expert.md": {
                name: "Postman_Student_Expert.md",
                path: "/Home/Certificates/Postman_Student_Expert.md",
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
