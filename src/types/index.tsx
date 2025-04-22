export type SubmenuItem = {
  id: number;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  path: any;
};
export type navArrType = {
  id: number;
  title: string;
  url: string;
  Submenu?: SubmenuItem[];
};

export type breadcrumbArrType = {
  id: number;
  img: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    src: any;
  };
  title?: string;
  content?: string;
};
export type section4ArrayType = {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
  title: string;
  desc: string;
  content: string;
};
export type pujaServicesArrType = {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
  title: string;
  path: string;
};
export type listArrType = {
  id: number;
  title: string;
};
export type listArrType1 = {
  id: number;
  title: string;
};
export type imagearrType = {
  id: number;
  img: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    src: any;
  };
  url: string;
};
export type imagearrType1 = {
  id: number;
  img: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    src: any;
  };
  height: string;
  width: string;
  position: string;
};
export type contentarrType = {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
};
export type cardarrType = {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
  title: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img1: any;
};
export type bookingarrType = {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
  title: string;
  description: string;
};
export type updateuserType = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  username: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
  email: string;
  phoneNumber: number;
  address: string;
  password: number;
  registrationType: string;
  aadharNumber: number;
  area: string;
  city: string;
  state: string;
  language: string;
};
