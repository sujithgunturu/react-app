import './App.css';
import Welcome from '../src/components/detailstilecomponent';
let commonPropsarray = [
                  { name: 'Sujith Gunturu',
                      username: '@starlord_4', 
                      tweetcontent: "Our real challenge is Bay Area has negative unemployment", 
                      device: "Adroid", 
                      time: "11:42 AM Jan 5 2022",
                      analytics: "analytics", 
                      id: "1010101030384"
                    },
                    { name: 'Sujith Gunturu',
                      username: '@starlord_4', 
                      tweetcontent: "Sounds like satire", 
                      device: "Adroid", 
                      time: "11:45 AM Jan 4 2022",
                      analytics: "analytics", 
                      id: "1010101030384"
                    },
                    { name: 'Sujith Gunturu',
                      username: '@starlord_4', 
                      tweetcontent: "Let’s make Twitter maximum fun!.", 
                      device: "Adroid", 
                      time: "11:47 AM Jan 3 2022",
                      analytics: "analytics", 
                      id: "1010101030384"
                    },
                    { name: 'Sujith Gunturu',
                      username: '@starlord_4', 
                      tweetcontent: "For Twitter to deserve public trust, it must be politically neutral, which effectively means upsetting the far right and the far left equally", 
                      device: "Adroid", 
                      time: "11:48 AM Jan 2 2022",
                      analytics: "analytics", 
                      id: "1010101030384"
                    },
                    { name: 'Sujith Gunturu',
                      username: '@starlord_4', 
                      tweetcontent: "How do enterprises approach modernizing their existing applications to run on @kubernetesio", 
                      device: "Adroid", 
                      time: "11:49 AM Jan 1 2022",
                      analytics: "analytics", 
                      id: "1010101030384"
                    }
                  ];


function App() {
  var rows = [];
  commonPropsarray.forEach(commonProps => {
    rows.push(
      <Welcome 
        name = {commonProps.name} 
        username = {commonProps.username}
        tweetcontent = {commonProps.tweetcontent}
        device = {commonProps.device}
        time = {commonProps.time}
        analytics = {commonProps.analytics} />
        );
  });
  return (
    <div className="App">
      <header className="App-header">
        {rows}
      </header>
    </div>
  );
}
export default App;
