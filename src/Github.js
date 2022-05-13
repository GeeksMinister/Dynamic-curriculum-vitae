import React from 'react'

export default class Github extends React.Component {
  state = {
    loading: true,
    repoName: [],
    description: [],
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/GeeksMinister/repos");
    const myGithub = await response.json();
    let namesArray = [];
    let descriptionsArray = [];
    for (let index = 0; index < myGithub.length; index++) {
      this.setState({ repoName: myGithub[index].name, description: myGithub[index].description });
      namesArray.push([myGithub[index].name]);
      descriptionsArray.push([myGithub[index].description]);
    }
    this.setState({ repoName: namesArray, description: descriptionsArray });
  }

  render() {
    var result = []
    var output = 'Håller på att hämta resultat.....';

    for (let index = 0; index < this.state.repoName.length; index++) {
      result.push(
        <div>
          <tr>
            <th className='repo-name'>{this.state.repoName[index]}</th>
          </tr>
          <tr>
            <td className='repo-description'>{this.state.description[index]}</td>
          </tr>
        </div>
      );
      if (result.length === this.state.repoName.length) {
        this.setState({ loading: false });
        output = result;
      }
    }
    return (
      <tbody>
        {output}
      </tbody>
    );
  }
}


