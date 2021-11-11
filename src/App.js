//import logo from './logo.svg';
import './App.css';
import Test from "./Test";
import Header from "./Header/Header";
import Goods from './Goods';

const HeaderData =  {
  site_name: "Интернет магазин",
  nav: [
    {"link" : "nav1", "text":"my_link"},
    {"link" : "nav2", "text":"my_link2"},
    {"link" : "nav3", "text":"my_link3"},
       ]
};

const goods = [
  {"title":"яблоко", "cost":3.30, "image": "https://cdn2.iconfinder.com/data/icons/gardening-caramel-vol-1/256/APPLE-512.png"},
  {"title":"груша", "cost":5.30, "image": "https://cdn2.iconfinder.com/data/icons/fruit-nut/512/08-fruit-pear-food-256.png"},
]

function App() {
  return (
  <div className="App">
    <> 
      <Header data={HeaderData} second_header="Продажа фруктов"/>
       <Test/>
       {goods.map(item=><Goods key={item.title} title={item.title}  cost=<p>Цена: {item.cost} руб</p> image={item.image}/>)}
       
    </>     
    
    </div>
  );
}
export default App;
