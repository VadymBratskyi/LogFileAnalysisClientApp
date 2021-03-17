import { Component, Input, OnInit } from '@angular/core';
import { LogTreeNode } from '@log_models';

@Component({
  selector: 'app-inner-table',
  templateUrl: './inner-table.component.html',
  styleUrls: ['./inner-table.component.scss']
})
export class InnerTableComponent implements OnInit {

  constructor() { }

  @Input() data: LogTreeNode;

  displayedColumns: string[] = ['key', 'value'];
  dataSource: LogTreeNode[];

  ngOnInit(): void {
    this.dataSource = [this.data];
  }

}
