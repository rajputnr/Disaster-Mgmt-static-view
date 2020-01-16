import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExampleModalPage } from '../example-modal/example-modal.page'
 
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  dataReturned:any;
 
  constructor(
    public modalController: ModalController
    
  ) { }
 
  async openModal() {
    const modal = await this.modalController.create({
      	
      component: ExampleModalPage,
      componentProps: {
        "paramTitle": "Flood",
        
      }
    }); 	
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
  async openModal1() {
    const modal1 = await this.modalController.create({
      component: ExampleModalPage,
      componentProps: {
        "paramTitle": "Fire"
      }
    }); 	
    modal1.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal1.present();
  }
  async openModal2() {
    const modal1 = await this.modalController.create({
      component: ExampleModalPage,
      componentProps: {
        "paramTitle": "Earthquake"
      }
    }); 	
    modal1.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal1.present();
  }
  async openModal3() {
    const modal1 = await this.modalController.create({
      component: ExampleModalPage,
      componentProps: {
        "paramTitle": "Cyclone"
      }
    }); 	
    modal1.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal1.present();
  }
  
  async openModal4() {
    const modal1 = await this.modalController.create({
      component: ExampleModalPage,
      componentProps: {
        "paramTitle": "Explosions"
      }
    }); 	
    modal1.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal1.present();
  }
  
  async openModal5() {
    const modal1 = await this.modalController.create({
      component: ExampleModalPage,
      componentProps: {
        "paramTitle": "Mass Attacks"
      }
    }); 	
    modal1.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal1.present();
  }
}

