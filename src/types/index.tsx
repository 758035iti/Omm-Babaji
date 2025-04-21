export type SubmenuItem= {
  name: string;
  path: Record<string, unknown>
}
export type navArrType={
    id:number
    title:string
    url:string
    submenu?: SubmenuItem[];
    icon?:Record<string, unknown>
}
export type breadcrumbArrType={
    id:number
    img:Record<string, unknown>
    title?:string
    content?:string
}
export type section4ArrayType={
    id:number
    img:Record<string, unknown>
    title:string
    desc:string
    content:string
}
export type pujaServicesArrType={
    id:number
    img:Record<string, unknown>
    title: string
    path:string
}
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
    img: Record<string, unknown>
    url:string;
  };
  export type imagearrType1 = {
    id: number;
    img: Record<string, unknown>
  height:string;
  width:string;
    position: string;
  };
  export type contentarrType = {
    id: number;
    icon: Record<string, unknown>
    title: string;
  };
export type cardarrType ={
    id:number;
    img:Record<string, unknown>
    title:string;
    name:string;
    img1:any;
}  
export type bookingarrType = {
  id: number;
  img: Record<string, unknown>
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
  img: Record<string, unknown>
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