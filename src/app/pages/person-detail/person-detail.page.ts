import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.page.html',
  styleUrls: ['./person-detail.page.scss'],
})
export class PersonDetailPage implements OnInit {

  person: any;

  constructor(
    private activatedActiveRoute: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    let id = this.activatedActiveRoute.snapshot.paramMap.get('id');
    this.api.getPerson(id).subscribe(res => {
      this.person = res
    })
    // console.log(this.personId);

  }

}
