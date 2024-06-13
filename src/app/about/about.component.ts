import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
  
  

export class AboutComponent{

  
  cards = [
    {
      title: 'Card 1',
      description: 'This is the description for Card 1',
      image: '../assets/images/waka-flocka.gif'
    },
    {
      title: 'Card 2',
      description: 'This is the description for Card 2',
      image: 'assets/images/tom-and-jerry.gif'
    },
    {
      title: 'Card 3',
      description: 'This is the description for Card 3',
      image: 'assets/images/credits-to-milkmochabear-milk-and-mocha.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/whiskey-ei-suoi-amici-coccole-sonore.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/dbscny-posbcny.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/girl4.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/gify.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/girl3.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/wonder-how.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/tenor.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/tenor2.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/tenor3.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/3e087a797e15141c5a25a41a29d6e481.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/7b7d8aa635e31923326b18d7a2a659c1.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/gifs.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/gifs2.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/gifs3.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/e9c52ec7e9bfaa74a6998a632119747f.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/de825326323c1e1cda15a3f61bbccb36.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/funny.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/1gif.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/4gif.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/5gif.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/2gif.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/3gif.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/6gif.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/7gif.gif'
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
      image: 'assets/images/8gif.gif'
    },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('zoom-in');
        } else {
          entry.target.classList.remove('zoom-in');
        }
      });
    });

    document.querySelectorAll('.card').forEach(card => {
      observer.observe(card);
    });
  }
  constructor(private clipboard: Clipboard) { }
  copyGifLink() {
    const copyLink = "https://tenor.com/en-IN/search/mocha-gifs";
    this.clipboard.copy(copyLink);
    alert("GIF link copied to clipboard");
}
}