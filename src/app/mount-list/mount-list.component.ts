import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Mount} from '../model/Mount';
import {MountService} from '../service/MountService';
import {error} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mount-list',
  templateUrl: './mount-list.component.html',
  styleUrls: ['./mount-list.component.css']
})
export class MountListComponent implements OnInit {
  mounts: Observable<Mount[]>;

  constructor(private mountService: MountService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.mounts = this.mountService.getMountsList();
  }

  deleteMount(id: number) {
    this.mountService.deleteMount(id)
      .subscribe(data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
mountDetails(id: number) {
    this.router.navigate(['details', id]);
}
}
