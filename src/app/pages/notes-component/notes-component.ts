import { Component, inject, model, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faTrashCan,faMoon,faFileLines,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
import { faCoffee,faPenToSquare,faGear,faWandMagicSparkles,faUser,faArrowRightFromBracket,faTableCellsLarge} from '@fortawesome/free-solid-svg-icons';
import { Masterservice } from '../masterservice/masterservice';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes-component',
  imports: [FontAwesomeModule,FormsModule],
  templateUrl: './notes-component.html',
  styleUrl: './notes-component.css',
})
export class NotesComponent implements OnInit{
  faclipboard=faClipboard;
  fafileslines=faFileLines;
  faPenToSquare=faPenToSquare;
  fatrashcan=faTrashCan;
  masterser=inject(Masterservice);
  cd = inject(ChangeDetectorRef)

  Notesobj:any={
    "notesTitle":"",
    "notesHead":""
  }
  notesList:any[]=[];
  
  ngOnInit(): void {
      this.getnotes();
  }

  onOpenEvents(){
    const model=document.getElementById("myModal");
    if(model!= null){
      model.style.display="block"
    }
  }
  onCloseEvents(){
    const model=document.getElementById("myModal");
    if(model != null){
      model.style.display ="none"
    }
  }
  onSaveNotes(){
    this.masterser.postnotes(this.Notesobj).subscribe((res)=>{ 
      alert("posted notes");
      this.onCloseEvents();
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  getnotes(){
    this.masterser.getNotes().subscribe((res)=>{
      console.log(res);
      this.notesList=res;
      this.cd.detectChanges()
    })
  }

  deletenotes(id:string){
    const isdelete = confirm("Are you want to delete")
    if(isdelete){
      this.masterser.deleteNotes(id).subscribe(()=>{
      
        alert("deleted");
        this.getnotes();
      })
    }
  }

  onEdit(data:any){
    this.onOpenEvents()
    this.Notesobj=data;
  }

  onUpdatenotes(id:string){
    this.masterser.updateNotes(this.Notesobj,id).subscribe((res:any)=>{
      alert("sucess");
      this.getnotes()
      this.onCloseEvents()
    },error=>{
      alert(JSON.stringify(error))
    })

  }
    
}
