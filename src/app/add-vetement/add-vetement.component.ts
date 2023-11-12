import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { Genre } from '../model/genre.model';
import { Route, Router } from '@angular/router';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',

})
export class AddVetementComponent implements OnInit {
  genre!: Genre[];
  newIdG!: number;
  newGenre!: Genre;
  newVetement = new Vetement();
  message!: string;
  uploadedImage!: File;
  imagePath: any;
  

  constructor(private vetementService: VetementService,
    private router: Router) {

  }
  ngOnInit(): void {
  //  this.genre=this.vetementService.listeGenre();
     this.vetementService.listeGenre().
      subscribe(ge => {
        this.genre = ge._embedded.genres;
        console.log(ge);
      }); 


  }

  addVetement(){
  
 /*    this.newVetement.genre = this.genre.find(ge => ge.idG == this.newIdG)!;
    this.vetementService.ajouterVetement(this.newVetement).subscribe(vet => {
    console.log(vet);
    this.router.navigate(['vetements']);
    });  */  
    this.vetementService
.uploadImage(this.uploadedImage, this.uploadedImage.name)
.subscribe((img: Image) => {
this.newVetement.image=img;
this.newVetement.genre = this.genre.find(cat => cat.idG
== this.newIdG)!;
this.vetementService
.ajouterVetement(this.newVetement).subscribe(() => {
this.router.navigate(['vetements']);
});
});
}
onImageUpload(event: any) {
  this.uploadedImage = event.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(this.uploadedImage);
  reader.onload = (_event) => { this.imagePath = reader.result; }
  }
  
}
