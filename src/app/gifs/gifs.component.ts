import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy { //ondestroy imported from angular core rxjs
  gifs: any=[] = [];
  subscription: Subscription = new Subscription;//sets it to a type
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.subscription = this.dataService.getGifs().subscribe((response: any)=>{
      this.gifs = response;
    });
    };
    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
  }


