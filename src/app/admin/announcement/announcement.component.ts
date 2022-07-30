import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  annoncementData = [
    {
      image:'https://mobiri.se/assets/images/free.jpg',
      name:'Free to Use',
      description:'Mobirise is a totally free website maker software. This is why so many users love it for. With Mobirise, you can create an eye-catching personal website or a competitive landing page for your small business with no budget at all.',
      class:'',
      button:'show',
      buttonName:'Visit Our Site',
      buttonClass:'btn btn-outline-primary'
    },
    {
      image:'https://mobiri.se/assets/images/bootamp-1.jpg',
      name:'Bootstrap and AMP',
      description:'There are two innovative web component frameworks Mobirise is based on: Bootstrap 4 Framework and Google AMP. These both technologies stand for responsiveness, leight-weight and high loading speed of your website.',
      class:'reverse',
      button:'',
    },
    {
      image:'https://mobiri.se/assets/images/responsive.jpg',
      name:'Responsive Design',
      description:'Mobirise Site Maker creates only responsive websites. This means your website will accommodate the screen ratio to fit every device. It will be a pleasure for your website viewers to have an equally great experience on both Desktop and smaller devices.',
      class:'',
      button:'',
    },
    {
      image:'https://mobiri.se/assets/images/draganddrop.jpg',
      name:'WYSIWYG Features',
      description:'Mobirise is a WYSIWYG & visual web editor. In other words, you see and edit your website that looks just like the same as the published website. With the Drag and Drop functionality, you can easily add and move new blocks wherever you want on your pages.',
      class:'reverse',
      button:'show',
      buttonName:'Make Your Site',
      buttonClass:'btn btn-outline-secondary'
    },
    {
      image:'https://mobiri.se/assets/images/offline-1.jpg',
      name:'Offline Builder',
      description:'Mobirise is a downloadable offline application that is supported on Windows, Mac, Android OS and Linux. It s a good advantage in case you want or have to work on your projects without Internet access.',
      class:'',
    },
    {
      image:'https://mobiri.se/assets/images/freehosting.jpg',
      name:'Host for free',
      description:'There are multiple publishing options in Mobirise Website Creator and all of them are completely free. You can download or export your site files to your PC or upload your website directly to your hosting with FTP settings. Moreover, Mobirise allows you a one-click website publication on a free .mobirisesite.com hosting with a custom subdomain.',
      class:'reverse'
    },
    {
      image:'https://mobiri.se/assets/images/integrations.jpg',
      name:'Many Integrations',
      description:'Being a Mobirise user means having access to many integrations: you can use Google Fonts, free stock images, icons, YouTube and Vimeo videos, social comments, feeds and share buttons, and a lot more.',
      class:'',
      button:'show',
      buttonName:'Go This Site',
      buttonClass:'btn btn-outline-success'
    },
     
  ]
}
