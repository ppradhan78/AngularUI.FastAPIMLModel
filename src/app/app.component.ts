import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenizationComponent } from './components/tokenization/tokenization.component';
import { SingleFileUploadComponent } from './components/single-file-upload/single-file-upload.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TokenizationComponent, FormsModule,SingleFileUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularUI.FastAPIMLModel';
}
