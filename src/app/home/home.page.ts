import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon],
})
export class HomePage {
  
  photo?: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer) {}
  
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100, 
      allowEditing: false, 
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    if (image && image.dataUrl) {
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
    }    
  }
}




/* 











*/