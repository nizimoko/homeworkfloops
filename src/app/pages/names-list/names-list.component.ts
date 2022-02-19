import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NamesService } from 'src/app/services/names.service';

@Component({
  selector: 'app-names-list',
  templateUrl: './names-list.component.html',
  styleUrls: ['./names-list.component.css'],
})
export class NamesListComponent implements OnInit {
  namesArrFromService: string[];
  constructor(
    private namesService: NamesService,
    private route: ActivatedRoute
  ) {
    this.namesArrFromService = this.namesService.namesArr;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.namesArrFromService = this.namesService.namesArr.filter((name) =>
        name.includes(data['name'])
      );
    });
  }
}
