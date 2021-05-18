import React,{Component} from 'react'
import Hero from '../components/hero/Hero'
import SearchBar from '../components/searchbar/SearchBar'
import Card from '../components/card/Card'
import './Homepage.css'


class Homepage extends Component {
    constructor(){
        super();
        this.state={
            searchInput:'',
            data:[]
        }
    }
    onSearch =() =>{
        console.log(this.state.searchInput);
        fetch(`http://api.tvmaze.com/search/shows?q=${this.state.searchInput}`)
        .then(res =>res.json())
        .then(json =>{
            // console.log(json[0]);
            this.setState({
                data: json
            })
            // console.log(this.state.data.shows);
        })
    }
    removeTags = (text) => {
        if (text === null || text === "") {
            return false;
        } else {
            text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "");
    };
    fn(text, count){
        return text.slice(0, count) + (text.length > count ? "..." : "");
    }
    onSearchChange =(e)=>{
        this.setState({searchInput: e.target.value})
    }
    render(){
    return (
        <div>
            <Hero/>
            <SearchBar onSearch={this.onSearch} onSearchChange={this.onSearchChange}/>
            <div className='carddiv'>
            {this.state.data.map((item) =>(
                <Card
                key={item.show.id}
                id={item.show.id}
                image={item.show.image ? item.show.image.medium:
                "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"}
                name={item.show.name}
                summary={item.show.summary && this.fn(this.removeTags(item.show.summary),40)}/>
                
            ))}
            </div>
            
        </div>
    )}
}

export default Homepage
