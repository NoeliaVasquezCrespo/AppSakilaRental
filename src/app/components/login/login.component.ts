import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice/apiservice.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ApiserviceService, private router: ActivatedRoute) { }

  errormsg: any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
   
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if(this.getparamid){
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res,'res==>');
        this.userForm.patchValue({
          email:res.data[0].email,             
        });
      });
    }
    
  }

  userForm = new FormGroup ({
    'email': new FormControl('',Validators.required)
  });

  //create nw user
  userAuth(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createAuth(this.userForm.value).subscribe((res)=>{
        console.log(res, 'res==>');
        this.userForm.reset();
        this.successmsg = res.message;
        this.successNotificationLogin()
      })
    } else {
      this.wrongNotificationLogin()
    }
    

  }


  successNotificationLogin(){
    Swal.fire({
      title: 'BIENVENIDO!',
      text: 'Inicio de sesión correcto',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.value) {
        window.location.href="http://localhost:4200/cart"
      }
    })
  } 
    
  wrongNotificationLogin(){
    Swal.fire({
      icon: 'error',
      title: 'Error al iniciar sesión',
      text: 'Complete los espacios vacíos',
    })
  }

  
}
