import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  numberOfUpVotes: number = 0;
  numberOfDownVotes: number = 0;

  upVoteButtonClick(){
    this.numberOfUpVotes++;
  }

  downVoteButtonClick(){
    this.numberOfDownVotes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
