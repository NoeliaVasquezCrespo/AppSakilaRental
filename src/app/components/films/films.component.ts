import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  @Input() producto: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public detalles() {
    this.router.navigate(["/film/details", this.producto.film_id])
  }


}
