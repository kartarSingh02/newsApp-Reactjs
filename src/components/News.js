import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles =[
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "First transgender cricketer to play T20 international",
      "description": "Canada's Danielle McGahey is set to become the first transgender cricketer to play in an official T20 international.",
      "url": "http://www.bbc.co.uk/sport/cricket/66597000",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AA7C/production/_130944634_daniellemcgahey.jpg",
      "publishedAt": "2023-08-31T05:52:22.8067333Z",
      "content": "Transgender cricketer Danielle McGahey is set make her T20 international debut on 4 September in Los Angeles\r\nCanada's Danielle McGahey is set to become the first transgender cricketer to play in an … [+14633 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ];

  constructor(){
    super();
    console.log("this is constructor from new component");
    this.state={
      articles: this.articles,
      loading:false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsDekho - Top Headlines</h2>
          <div className='row'>
            {this.state.articles.map((element)=>{
                return  <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
            })}
          </div>
      </div>
    )
  }
}

export default News
