import {Component} from 'react'
import TabItem from '../TabItem'
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

class Greetings extends Component {
  state = {tabId: languageGreetingsList[0].buttonText}

  onChangeTabId = ItemText => {
    this.setState({tabId: ItemText})
  }

  render() {
    const {tabId} = this.state
    const greetingItem = languageGreetingsList.filter(
      item => item.buttonText === tabId,
    )
    console.log(greetingItem)
    return (
      <div className="main-container">
        <div className="main-container1">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="list-container">
            {languageGreetingsList.map(eachItem => (
              <TabItem
                key={eachItem.id}
                ItemText={eachItem.buttonText}
                tabId={tabId}
                changeTabId={this.onChangeTabId}
              />
            ))}
          </ul>
          <div className="image-card">
            <img
              src={greetingItem[0].imageUrl}
              alt={greetingItem[0].imageAltText}
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Greetings
