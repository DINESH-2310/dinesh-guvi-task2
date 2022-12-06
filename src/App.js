import './App.css'
import Card from './Card';

import  ('../node_modules/bootstrap/dist/css/bootstrap.min.css');


function App() {
  

  
  var priceCard =
    [
      { 
        plan: "free",
        price: "0",
        features: [
          {
            title: "Single User",
            isEnable:true
          },
          {
            title: "5GB Storage",
            isEnable:true
          },
          {
            title: "Unlimited Public Projects",
            isEnable:true
          },
          {
            title: "Community Access",
            isEnable:true
          },
          {
            title: "Unlimited Private Projects",
            isEnable:false
          },
          { title: "Dedicated Phone Support",
          isEnable:false 
        },
          {
            title: "Free Subdomain",
            isEnable:false
          },
          {
            title: "Monthly Status Reports",
            isEnable:false,
          },


        ]
        

      },
      {
        plan: "plus",
        price: "9",
        features: [
          {
            title: "5 Single User",
            isEnable:true
          },
          {
            title: "50GB Storage",
            isEnable:true
      
          },
          {
            title: "Unlimited Public Projects",
            isEnable:true
          },
          {
            title: "Community Access",
            isEnable:true
          },
          {
            title: "Unlimited Private Projects",
            isEnable:true
          },
          { title: "Dedicated Phone Support",
          isEnable:true 
        },
          {
            title: "Free Subdomain",
            isEnable:true
          },
          {
            title: "Monthly Status Reports",
            isEnable:false
          },


        ]
      },
      {
        plan: "pro",
        price: "49",
        features: [
          {
            title: "Unlimited User",
            isEnable:true
          },
          {
            title: "150 Storage",
            isEnable:true
          },
          {
            title: "Unlimited Public Projects",
            isEnable:true
          },
          {
            title: "Community Access",
            isEnable:true
          },
          {
            title: "Unlimited Private Projects",
            isEnable:true
          },
          { title: "Dedicated Phone Support",
          isEnable:true },
          {
            title: "Free Subdomain",
            isEnable:true
          },
          {
            title: "Monthly Status Reports",
            isEnable:true
          },


        ]
      }
    ]
  return (
    
<div className='section'>
    <div  className="container">
      <div className="row">
        
        {
        priceCard.map((card) => {
          return <Card card={card}></Card>
        })
      }
      </div>
    </div>
    </div>
  );
}       

export default App;
