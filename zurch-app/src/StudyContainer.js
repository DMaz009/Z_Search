import React, { Component } from 'react'


export default class StudyContainer extends Component {
  constructor(props) {
    super(props)
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
  }


  render (){
    return (
      <h1> StudyContainer </h1>
    )
  }
}
