import './App.css';
import Welcome from '../src/components/detailstilecomponent';
let commonProps = { name: 'Sujith Gunturu',
                      username: '@starlord_4', 
                      tweetcontent: "Our real challenge is Bay Area has negative unemployment, so if we dont treat and compensate our  people well, they have many other offers and will just leave! Id like hereby to invite UAW to hold a union vote at their convenience. Tesla will do nothing to stop them.", 
                      device: "Adroid", 
                      time: "11:41 AM Jan 7 2022",
                      analytics: "analytics", 
                      id: "1010101030384"
                    };


function App() {
  var rows = [];
  for (var i = 0; i < 10; i++) {
      rows.push(
      <Welcome 
        name = {commonProps.name} 
        username = {commonProps.username}
        tweetcontent = {commonProps.tweetcontent}
        device = {commonProps.device}
        time = {commonProps.time}
        analytics = {commonProps.analytics} />
        );
  }

  return (
    <div className="App">
      <header className="App-header">
        {rows}
      </header>
    </div>
  );
}
export default App;
