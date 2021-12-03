import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  searchTitle = '';
  message = '';  

  constructor(private service:ApiserviceService) { }

  readData:any;
  successmsg: any;

  ngOnInit(): void {
    this.getAllData();
    
  }

  //Get data
  getAllData()
  {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    });
  }

  

}
