import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../service/giphy.service';


@Component({
  selector: 'app-gif-generator',
  templateUrl: './gif-generator.component.html',
  styleUrl: './gif-generator.component.css'
})
export class GifGeneratorComponent implements OnInit {
  gifsData: any[] = [];
  loading: boolean = false;
  // searchValue: string = "welcome";
  searchValue: string="Search here";
  gifContent: string = '';
  constructor(private giphyService: GiphyService) { 
    
  }

  ngOnInit(): void {
    this.generateGif();
  }

  generateGif(): void {
    this.loading = true;
    this.gifsData = [];
    this.giphyService.searchGifs(this.searchValue).subscribe(data => {
      this.gifsData = data.data;
      this.loading = false;
    });
  }

  
  downloadGif(): void {
    this.giphyService.downloadFile(this.gifContent, 'filename.gif');
  }
  
  }




  