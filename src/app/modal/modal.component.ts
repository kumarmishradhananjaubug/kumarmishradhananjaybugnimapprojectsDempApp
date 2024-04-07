import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef, OnDestroy, Input } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { StorageService } from '../services/storage.service';
import { FormControl } from '../../../node_modules/@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  registerForm: FormControl<any> = new FormControl(); 
  @Input() id: string='';
  private element: any;
  image: any = '../../assets/img/avatar.jpg';
  age = 40;
  profileData:any;
  address: string='';
  addr1: string='';
  addr2: string='';
  country: string='';
  firstName: string='';
  lastName: string='';
  newsLetter = false;
  number: string='';
  state: string='';
  email: string='';

  // default values for skipping form fill up activity - yukk
  /*
    address = 'Home';
    addr1: any = 'adasdad';
    addr2: any = 'adasdad';
    country: any = 'UK';
    firstName: any = 'Faran';
    lastName: any = 'Shaikh';
    newsLetter: any = true;
    number: any = '1234567890';
    state: any = 'MH';
    email: any = 'dasda@dasdas.com';
  */

  states = [
    { id: 'MH', name: 'MH' },
    { id: 'DL', name: 'DL' },
    { id: 'TN', name: 'TN' }
  ];
  countries = [
    { id: 'India', name: 'India' },
    { id: 'USA', name: 'USA' },
    { id: 'UK', name: 'UK' }
  ];
  addrType = [
    { id: 'Home', name: 'Home' },
    { id: 'Company', name: 'Company' }
  ];

  tags = [
    { value: 'Cricket', display: 'Cricket' },
    { value: 'Football', display: 'Football' },
    { value: 'Hockey', display: 'Hockey' }
  ];

  // tslint:disable-next-line:max-line-length
  constructor(private modalService: ModalService, private el: ElementRef, private router: Router, private route: ActivatedRoute, private storageService: StorageService) {
    this.element = el.nativeElement;
  }
  ngOnInit(): void {
    const modal = this;
    this.route.url.subscribe(res => {
      const param = res[0].path;
      if (param === 'profile') {

        // this.storageService.watchStorage().subscribe((data: string) => {
        //   this.profileData = JSON.parse(localStorage.getItem('formData'));
        //   console.log(this.profileData);
        //   if (this.profileData) {
        //     this.updateModalValues(this.profileData);
        //   }
        //   // console.log(this.formData);
        //   // console.log(data);
        // });
        this.storageService.watchStorage().subscribe((data: string | null) => {
          if (data !== null) {
            this.profileData = JSON.parse(data);
            console.log(this.profileData);
            if (this.profileData) {
              this.updateModalValues(this.profileData);
            }
          }
        });
        
      }
    });

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'form-modal') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  onFileSelect(event:any) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files.item(0));
    reader.onload = () => {
      this.image = reader.result;
    };
  }
  selectAge(e:any) {
    this.age = e.target.value;
  }

  onSubmit(data:any) {
    this.storageService.setItem('formData', JSON.stringify(data.value));
    this.closeModal('custom-modal-1');
    this.router.navigate(['/profile']);
  }

  // open modal events
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('form-modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('form-modal-open');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  updateModalValues(profileData:any) {
    this.addr1 = profileData.addr1;
    this.addr2 = profileData.addr2;
    this.address = profileData.address;
    this.age = profileData.age;
    this.country = profileData.country;
    this.firstName = profileData.firstName;
    this.lastName = profileData.lastName;
    this.image = profileData.image;
    this.newsLetter = profileData.newsLetter;
    this.number = profileData.number;
    this.state = profileData.state;
    this.email = profileData.email;
    this.tags = profileData.tags;
  }
  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

}
