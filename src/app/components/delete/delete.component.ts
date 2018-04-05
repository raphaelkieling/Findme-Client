import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public text: string;
  public fnDelete:Function
  constructor(
    private dialogRef:MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.text =  data.text;
    this.fnDelete = data.fnDel;
  }

  ngOnInit() {}

  fecharModal(){
    this.dialogRef.close();
  }

  deletar(){
    this.fnDelete();
    this.dialogRef.close();
  }

}
