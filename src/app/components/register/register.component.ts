import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute} from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice/apiservice.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:ApiserviceService, private router: ActivatedRoute) { }

  errormsg: any;
  successmsg:any;
  getparamid:any;
  selected!: any;
  collection : any;

    
  //Get data
  getAllData()
  {
    this.service.getAddressData().subscribe((res)=>{
      console.log(res,"res==>");
      this.collection = res.data;
    });
  }

  ngOnInit(): void {
    this.getAllData();
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if(this.getparamid){
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res,'res==>');
        this.userForm.patchValue({
          first_name:res.data[0].first_name,
          last_name:res.data[0].last_name,
          email:res.data[0].user.email,
          
        });
      });
    }
    
  }

  userForm = new FormGroup ({
    'first_name': new FormControl('',Validators.required),
    'last_name': new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required), 
  });

  //create nw user
  addUser(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createDataUser(this.userForm.value).subscribe((res)=>{
        console.log(res, 'res==>');
        this.userForm.reset();
        this.successmsg = res.message;
      })
      this.successNotificationRegister();
    }
    else {
      this.wrongNotificationRegister();
      return;
    }
     

  }


successNotificationRegister(){
  Swal.fire({
    title: 'Registro Correcto',
    text: 'El registro se realizó correctamente',
    icon: 'success',
    showCancelButton: false,
    confirmButtonText: 'Ok',
  }).then((result) => {
    if (result.value) {
      window.location.href="login"
    }
  })
} 

wrongNotificationRegister(){
  Swal.fire({
    icon: 'error',
    title: 'Error en el registro',
    text: 'Debe completar los espacios vacíos',
  })
}

}
