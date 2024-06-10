import { Component } from '@angular/core';
import { MlModelService } from '../../service/ml-model.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-file-upload',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './single-file-upload.component.html',
  styleUrl: './single-file-upload.component.css'
})
export class SingleFileUploadComponent {

  status: "initial" | "uploading" | "success" | "fail" = "initial";
  file: File | null = null;
  Summary: string = "";
  SummaryLength: number = 0;
  originalContentLength: number = 0;
  result: any;
  constructor(private service: MlModelService) { }

  // On file Select
  onChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.status = "initial";
      this.file = file;
    }
  }

  onUpload() {

    if (this.file) {
      const formData = new FormData();
      formData.append("file", this.file, this.file.name);

      this.service.upload(this.file).subscribe(responce => {

        this.result = JSON.parse( JSON.stringify( responce)).body;
        this.Summary = this.result.Summary;  
        this.SummaryLength = this.result.SummaryLength;  
        this.originalContentLength = this.result.ContentLength;

      });
    }
  }


}
