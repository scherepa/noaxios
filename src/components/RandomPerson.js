import React, {Component} from "react";

class People extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            person: null
        }
    }
    
    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person:data.results[0], loading: false});
        console.log(data['results'][0]['gender']);
        console.log(data['results'][0]['picture']['thumbnail']);
    }
   
    render(){ 
        if(this.state.loading){return <div>Loading...</div>; }
        if(!this.state.person) {return <div>No person was found</div>; } 
        return(
            /* {this.state.loading || this.state.person == null ? "loading..." : ...} */
           <div style={{textAlign:'left'}}>
               <fieldset style={{border:'white, solid', borderRadius:'14px'}}><legend style={{marginLeft:'auto', padding:'10px'}}><img src={this.state.person.picture.medium} alt="" style={{borderRadius:'50%'}} /></legend>
               <div style={{textAlign:'left'}}>{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}, {this.state.person.dob.age}</div>
               <div>{this.state.person.email}</div><div>{this.state.person.phone}, {this.state.person.cell}</div>
               <small>{this.state.person.location.city}, {this.state.person.location.state}, {this.state.person.location.country}</small>
               </fieldset>
           </div>
           )
    }
    
}

export default People