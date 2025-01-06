import { GapIncContent, YogLabsContent } from '@/data/md_files/work';
import { UniHubContent, RadiateContent, PeriodContent, OneShopContent, SecondHandContent } from '@/data/md_files/projects';
import { GDSCContent, AlgorithmusContent, IIITians_NetworkContent } from '@/data/md_files/extracurriculars';

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
                content: UniHubContent,
                children: {},
              },
              "Radiate.md": {
                name: "Radiate.md",
                path: "/Home/Projects/Radiate/Radiate.md",
                image: "/assets/file.png",
                type: "file",
                content: RadiateContent,
                children: {},
              },
              "Period.md": {
                name: "Period.md",
                path: "/Home/Projects/Period/Period.md",
                image: "/assets/file.png",
                type: "file",
                content: PeriodContent,
                children: {},
              },
              "Ecommerce.md": {
                name: "Ecommerce.md",
                path: "/Home/Projects/Ecommerce/Ecommerce.md",
                image: "/assets/file.png",
                type: "file",
                content: OneShopContent,
                children: {},
              },
              "Second_Hand.md": {
                name: "Second_Hand.md",
                path: "/Home/Projects/Second_Hand/Second_Hand.md",
                image: "/assets/file.png",
                type: "file",
                content: SecondHandContent,
                children: {},
              }
            },
          },
          Extracurriculars: {
            name: "Extracurriculars",
            path: "/Home/Extracurriculars",
            image: "/assets/extra-folder.png",
            type: "folder",
            children: {
              "GDSC.md": {
                name: "GDSC.md",
                path: "/Home/Extracurriculars/GDSC.md",
                image: "/assets/file.png",
                type: "file",
                content: GDSCContent,
                children: {},
              },
              "Algorithmus.md": {
                name: "Algorithmus.md",
                path: "/Home/Extracurriculars/Algorithmus.md",
                image: "/assets/file.png",
                type: "file",
                content: AlgorithmusContent,
                children: {},
              },
              "IIITians_Network.md": {
                name: "IIITians_Network.md",
                path: "/Home/Extracurriculars/IIITians_Network.md",
                image: "/assets/file.png",
                type: "file",
                content: IIITians_NetworkContent,
                children: {},
              },
            },
          },
        },
      },
    },
  },
};
