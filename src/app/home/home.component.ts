import { Meta } from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private meta: Meta, private modal: ModalService, private router: Router) {
  }

  ngOnInit() {

    localStorage.clear();
    // SEO
    this.meta.addTags([
      { name: 'description', content: 'Best leaders in Creative Digital Recruitment' },
      { name: 'author', content: 'Demo App consulting' },
      { name: 'keywords', content: 'Angular, Demo App, consulting, recruitment, leader, jobs' }
    ]);

  }
  openModal(id: string) {
    this.modal.open(id);
  }

  closeModal(id: string) {
    this.modal.close(id);
  }


}
