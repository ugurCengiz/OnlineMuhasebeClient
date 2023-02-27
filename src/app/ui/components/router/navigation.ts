export class Navigation  {
    routerLink : string = "";
    name:string ="";
    icon :string = "";
}

export const Navigations : Navigation []=[
    {
        routerLink:"/",
        name :"Ana Sayfa",
        icon:" fa fa-home "
    },
    {
        routerLink:"/ucafs",
        name :"Hesap planı",
        icon:" fa fa-file-signature "
    }
    
]
