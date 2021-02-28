export interface Article {
  id: number;
  title: string;
  description: string;
  img: string;
  section: string;
  content?: string;
  Images?: string[];
dep?:number[];
city?:string;

}
