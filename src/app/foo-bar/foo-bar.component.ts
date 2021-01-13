import { Component, OnInit } from '@angular/core';
import { connectTo } from 'a-ngy-store';
import { State } from '../state';

@Component({
  selector: 'an-foo-bar',
  templateUrl: './foo-bar.component.html',
  styleUrls: ['./foo-bar.component.scss']
})
@connectTo()
export class FooBarComponent implements OnInit {
  public state!: State;

  constructor() { }

  ngOnInit(): void {
  }
}
