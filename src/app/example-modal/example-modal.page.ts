import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-example-modal',
  templateUrl: './example-modal.page.html',
  styleUrls: ['./example-modal.page.scss'],
})
export class ExampleModalPage implements OnInit {
  
  modalTitle:string;
  modelId:number;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modalTitle = this.navParams.data.paramTitle;
    document.getElementById(this.modalTitle).style.display = "block";
    //alert(this.modalTitle);
  }

 async closeModal() {
    const onClosedData: string = "";
    await this.modalController.dismiss(onClosedData);
    document.getElementById(this.modalTitle).style.display = "none";
  }
}

