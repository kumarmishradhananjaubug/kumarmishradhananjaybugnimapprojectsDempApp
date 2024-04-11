import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef, OnDestroy, Input } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { StorageService } from '../services/storage.service';
import { FormControl } from '@angular/forms'; 

@Component({
  selector: 'form-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  registerForm: FormControl<any> = new FormControl();
  @Input() id: string = '';
  private element: any;
  image: any = '../../assets/img/avatar.jpg';
  age = 40;
  profileData: any;
  address: string = '';
  addr1: string = '';
  addr2: string = '';
  country: string = '';
  firstName: string = '';
  lastName: string = '';
  newsLetter = false;
  number: string = '';
  state: string = '';
  email: string = '';

  states: { id: string, name: string }[] = [];
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

  constructor(private modalService: ModalService, private el: ElementRef, private router: Router, private route: ActivatedRoute, private storageService: StorageService) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    const modal = this;
    this.route.url.subscribe(res => {
      const param = res[0].path;
      if (param === 'profile') {
        this.storageService.watchStorage().subscribe((data: string | null) => {
          if (data !== null) {
            this.profileData = JSON.parse(data);
            if (this.profileData) {
              this.updateModalValues(this.profileData);
            }
          }
        });
      }
    });

    this.loadStates(); 

    document.body.appendChild(this.element);

    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'form-modal') {
        modal.close();
      }
    });

    this.modalService.add(this);
  }

  loadStates(): void {
    if (this.country === 'India') {
      this.states = [
        { id: 'AP', name: 'Andhra Pradesh' },
  { id: 'ANP', name: 'Arunachal Pradesh' },
  { id: 'AM', name: 'Assam' },
  { id: 'BR', name: 'Bihar' },
  { id: 'CH', name: 'Chhattisgarh' },
  { id: 'GA', name: 'Goa' },
  { id: 'GJ', name: 'Gujarat' },
  { id: 'HR', name: 'Haryana' },
  { id: 'HP', name: 'Himachal Pradesh' },
  { id: 'JK', name: 'Jammu and Kashmir' },
  { id: 'JH', name: 'Jharkhand' },
  { id: 'KA', name: 'Karnataka' },
  { id: 'KL', name: 'Kerala' },
  { id: 'MP', name: 'Madhya Pradesh' },
  { id: 'MH', name: 'Maharashtra' },
  { id: 'MN', name: 'Manipur' },
  { id: 'ML', name: 'Meghalaya' },
  { id: 'MZ', name: 'Mizoram' },
  { id: 'NL', name: 'Nagaland' },
  { id: 'OR', name: 'Odisha' },
  { id: 'PB', name: 'Punjab' },
  { id: 'RJ', name: 'Rajasthan' },
  { id: 'SK', name: 'Sikkim' },
  { id: 'TN', name: 'Tamil Nadu' },
  { id: 'TG', name: 'Telangana' },
  { id: 'TR', name: 'Tripura' },
  { id: 'UP', name: 'Uttar Pradesh' },
  { id: 'UK', name: 'Uttarakhand' },
  { id: 'WB', name: 'West Bengal' },
  { id: 'DL', name: 'Delhi' }

      ];
    } else if (this.country === 'USA') {
      this.states = [
        { id: 'AL', name: 'Alabama' },
  { id: 'AK', name: 'Alaska' },
  { id: 'AZ', name: 'Arizona' },
  { id: 'AR', name: 'Arkansas' },
  { id: 'CA', name: 'California' },
  { id: 'CO', name: 'Colorado' },
  { id: 'CT', name: 'Connecticut' },
  { id: 'DE', name: 'Delaware' },
  { id: 'DC', name: 'District Of Columbia' },
  { id: 'FL', name: 'Florida' },
  { id: 'GA', name: 'Georgia' },
  { id: 'HI', name: 'Hawaii' },
  { id: 'ID', name: 'Idaho' },
  { id: 'IL', name: 'Illinois' },
  { id: 'IN', name: 'Indiana' },
  { id: 'IA', name: 'Iowa' },
  { id: 'KS', name: 'Kansas' },
  { id: 'KY', name: 'Kentucky' },
  { id: 'LA', name: 'Louisiana' },
  { id: 'ME', name: 'Maine' },
  { id: 'MD', name: 'Maryland' },
  { id: 'MA', name: 'Massachusetts' },
  { id: 'MI', name: 'Michigan' },
  { id: 'MN', name: 'Minnesota' },
  { id: 'MS', name: 'Mississippi' },
  { id: 'MO', name: 'Missouri' },
  { id: 'MT', name: 'Montana' },
  { id: 'NE', name: 'Nebraska' },
  { id: 'NV', name: 'Nevada' },
  { id: 'NH', name: 'New Hampshire' },
  { id: 'NJ', name: 'New Jersey' },
  { id: 'NM', name: 'New Mexico' },
  { id: 'NY', name: 'New York' },
  { id: 'NC', name: 'North Carolina' },
  { id: 'ND', name: 'North Dakota' },
  { id: 'OH', name: 'Ohio' },
  { id: 'OK', name: 'Oklahoma' },
  { id: 'OR', name: 'Oregon' },
  { id: 'PA', name: 'Pennsylvania' },
  { id: 'RI', name: 'Rhode Island' },
  { id: 'SC', name: 'South Carolina' },
  { id: 'SD', name: 'South Dakota' },
  { id: 'TN', name: 'Tennessee' },
  { id: 'TX', name: 'Texas' },
  { id: 'UT', name: 'Utah' },
  { id: 'VT', name: 'Vermont' },
  { id: 'VA', name: 'Virginia' },
  { id: 'WA', name: 'Washington' },
  { id: 'WV', name: 'West Virginia' },
  { id: 'WI', name: 'Wisconsin' },
  { id: 'WY', name: 'Wyoming' }
      ];
    } else if (this.country === 'UK') {
      this.states = [
        { id: 'LDN', name: 'London' },
        { id: 'MCR', name: 'Manchester' }
      ];
    } 
    }
  
  

  onFileSelect(event: any) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files.item(0));
    reader.onload = () => {
      this.image = reader.result;
    };
  }

  selectAge(e: any) {
    this.age = e.target.value;
  }

  onSubmit(data: any) {
    this.storageService.setItem('formData', JSON.stringify(data.value));
    this.closeModal('custom-modal-1');
    this.router.navigate(['/profile']);
  }

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

  updateModalValues(profileData: any) {
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

    this.loadStates(); 
  }

  onCountryChange(): void {
    this.loadStates(); 
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
}
