import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  film: any;

  constructor(
    private activatedActiveRoute: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    let id = this.activatedActiveRoute.snapshot.paramMap.get('id');
    this.api.getFilm(id).subscribe(res => {
      this.film = res;
    })
  }

}
