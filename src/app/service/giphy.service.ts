import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private apiKey = "03Ll4PlVYqwLc9BGMieqVUJ7jwHAXkf3";
  private apiUrl = "https://api.giphy.com/v1/gifs";
  // private apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"

  constructor(private http: HttpClient) { }

  searchGifs(q: string, limit: number = 10): Observable<any> {
    const url = `${this.apiUrl}/search?api_key=${this.apiKey}&q=${q}&limit=30&offset=0&rating=g&lang=en`;
    
    // https://api.giphy.com/v1/gifs/search?api_key=03Ll4PlVYqwLc9BGMieqVUJ7jwHAXkf3&q=cat&limit=10&offset=0&rating=g&lang=en

    return this.http.get(url);
  }


  // downloadFile(content: string, filename: string): void {
  //   const blob = new Blob([content], { type: 'text/gif' }); 
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = filename;
  //   document.body.appendChild(a);
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  //   document.body.removeChild(a);
  // }

  downloadFile(content: string, filename: string): void {
    fetch(content)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;

            // Trigger a click on the link element
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();

            // Cleanup: remove the link element from the DOM after a short delay
            setTimeout(() => {
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }, 100);

        })
        .catch(error => {
            console.error('Error downloading file:', error);
        });
}

}
