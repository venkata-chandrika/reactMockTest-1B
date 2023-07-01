import {Component} from 'react'

import TabItem from '../TabItem'

import ImageItem from '../ImageItem'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]
class Home extends Component {
  state = {
    activeTab: languageGreetingsList[0].id,
  }

  onChangeTab = activeTab => {
    this.setState({activeTab})
  }

  render() {
    const {activeTab} = this.state
    return (
      <div className="container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tab-container">
          {languageGreetingsList.map(eachList => (
            <TabItem
              key={eachList.id}
              tabDetails={eachList}
              onChangeTab={this.onChangeTab}
              isActive={activeTab === eachList.id}
            />
          ))}
        </ul>
        <ul className="img-container">
          {languageGreetingsList.map(eachList =>
            activeTab === eachList.id ? (
              <ImageItem key={eachList.id} imageDetails={eachList} />
            ) : null,
          )}
        </ul>
      </div>
    )
  }
}
export default Home
