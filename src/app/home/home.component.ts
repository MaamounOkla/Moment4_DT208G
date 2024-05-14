import { Component } from '@angular/core';
import { RamschemaComponent } from '../ramschema/ramschema.component';
 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RamschemaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
