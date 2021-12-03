export class Film {
  constructor(
    public title: string, 
    public description: string, 
    public release_year?:Date, 
    public rental_duration?:number,
    public rental_rate?: number,
    public length?:number,
    public replacement_cost?:number,
    public rating?:string,
    public special_features?:string,
    public film_id?: number) {
  }
}
