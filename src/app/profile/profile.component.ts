import { Meta } from '@angular/platform-browser';
import { StorageService } from './../services/storage.service';
import { ModalService } from './../services/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formData:any;
  constructor(private meta: Meta, private modalService: ModalService, private storageService: StorageService) {
    // SEO
    this.meta.addTags([
      { name: 'description', content: 'Best leaders in Creative Digital Recruitment' },
      { name: 'author', content: 'twoBytes consulting' },
      { name: 'keywords', content: 'Angular, twobytes, consulting, recruitment, leader, jobs' }
    ]);
  }

  // 
  ngOnInit() {
    // First time get the values
    const storedData = localStorage.getItem('formData');
    if (storedData !== null) {
      this.formData = JSON.parse(storedData);
    }
  
    this.storageService.watchStorage().subscribe(_ => {
      // Get the value after keeping a strict eye on localStorage data changes
      const updatedData = localStorage.getItem('formData');
      if (updatedData !== null) {
        this.formData = JSON.parse(updatedData);
        console.log(this.formData);
      }
    });
  }
  

  onFileSelect(event:any) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files.item(0));
    reader.onload = () => {
      this.formData.image = reader.result;
      this.storageService.setItem('formData', JSON.stringify(this.formData));
    };
  }

  openModal(id: string) {
    this.storageService.setItem('formData', JSON.stringify(this.formData));
    this.modalService.open(id);

  }
}
