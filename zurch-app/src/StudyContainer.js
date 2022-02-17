import React, { Component } from 'react'
import StudyCards from './components/StudyCards'


export default class StudyContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      studies: [],
      studiesToBeEdited: {},
      title: "Health",
      category: "",
      link: "",
      summary: "",
      rating: 0
    }

  }

  getStudies = () => {

    fetch(this.props.baseUrl + '/studies', {
      // credentials: 'include'
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return "Error"
      }
    }).then(data => {
      console.log(data);
      this.setState({studies: data })
    })
  }

  testPost = () => {
    const body = {
      "title": "New Study",
      "category": "Gerontology",
      "variable": "Variable",
      "hypothesis": "Hupotheseis",
      "link": "link",
      "design": "design",
      "summary": "summary",
      "rating": 5
    }
    fetch(this.props.baseUrl + '/studies', {
      headers: {"content-type": "application/json"},
      method: "POST",
      body: JSON.stringify(body)
      // credentials: 'include'
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return "Error"
      }
    }).then(data => {
      console.log(data);
      this.setState({studies: data })
    })
  }

  addStudy = (newStudy) => {

    const copyStudies = [...this.state.studies]
    copyStudies.push(newStudy)
    this.setState({
      studies: copyStudies
    })
  }

  componentDidMount() {
    this.getStudies()
    this.testPost()
  }


  render (){
    return (
      <div>
      // map through every study card
        {this.props.studyCards.map(() => (
          return (
          <StudyCards key={studyCard.id} title={this.state.title}/>
        )))}
        // render a studycard and pass down all the properties

      </div>
    )
  }
}
