import React from 'react'
import axios from 'axios'
import dummyData2 from './dummyData2'

class Search extends React.Component {
  // state = dummyData2;
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }
  async componentDidMount() {
    try {
      const {data} = await axios.get(`/api/jobs`)
      this.setState({
        jobs: data
      })
    } catch (err) {
      console.log(err)
    }
  }

  //state = dummyData2;
  render() {
    const {jobs} = this.state
    return (
      <div>
        <div className="md-form mt-0">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="d-flex flex-wrap">
          {jobs.map(job => (
            <div key={job.id} className="card border col-sm-6 ">
              <br />
              {/* <img
                src={job.company_logo}
                alt="company logo"
                className="img-thumbnail"
              /> */}
              <p className="card-title">{job.company}</p>
              <br />
              <p className="card-text">{job.title}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Search
